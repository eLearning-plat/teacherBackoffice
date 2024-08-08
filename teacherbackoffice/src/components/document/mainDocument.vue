<template>
  <main class="flex-1 p-3 mt-3">
    <div class="w-full mx-auto grid gap-8">
      <div class="grid gap-4">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
          <cardsDocument 
             v-for="(document, index) in filteredDocuments"
             :key="index"
             :document="document"
             @deleteDoc="deleteDocument"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import cardsDocument from "../cards/cardsDocument.vue";
import { mapState, mapActions } from 'vuex';
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  components: {
    cardsDocument,
  },
  data() {
    return {
      searchQuery: '',
      selectedFilter: '',
    };
  },
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { getAccessTokenSilently } = useAuth0();
    return { getAccessTokenSilently };
  },
  methods: {
    ...mapActions('documents', ['fetchDocuments', 'deletedocuments']),
    async deleteDocument(docId) {
      try {
        const token = await this.getAccessTokenSilently();

        console.log('Deleting document with id:', docId);
        await this.deletedocuments(docId,token);
      
        await this.loadDocuments();
        console.log('Document deleted successfully');
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    },
    async loadDocuments() {
      try {
        const token = await this.getAccessTokenSilently();

        const queryParams = {
          categoryID: this.category,
        };
        console.log('Fetching documents with params:', queryParams);
        await this.fetchDocuments(queryParams, token);
      } catch (error) {
        console.error('Error loading documents:', error);
      }
    }
  },
  computed: {
  ...mapState('documents', ['documents']),
  filteredDocuments() {
    const query = this.searchQuery.toLowerCase();
        if (!query) {
      return this.documents;
    }
    
    return this.documents.filter(item =>
      item.title.toLowerCase().includes(query)
    );
  }
},
  created() {
    this.loadDocuments();
  }
}
</script>

