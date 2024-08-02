<template>
  <main class="flex-1 p-3 mt-3">
    <div class="w-full mx-auto grid gap-8">
      <div class="grid gap-4">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
          <cardsDocument 
             v-for="(document, index) in localDocuments"
             :key="index"
             :document="document"/>
            
           </div>
        </div>
      </div>
  </main>
</template>
<script >
import cardsDocument from "../cards/cardsDocument.vue";
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    cardsDocument,},
    data(){
      return { localDocuments: [] , }

    },
    props: {
      category: {
      type: String,
      required: true,
    },
  },
    methods: {
    ...mapActions('documents', ['fetchDocuments']),
    async loadDocuments() {
      try {
        const queryParams = {
          categoryID: this.$props.category,
        }; 
        console.log('Fetching documents with params:', queryParams);
        await this.fetchDocuments(queryParams);
        this.localDocuments = this.$store.state.documents.documents;
        console.log('local doc',this.localDocuments)

      } catch (error) {
        console.error('Error loading documents:', error);
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addCourse() {
      this.closeModal();
    }
  },
  created() {
    this.loadDocuments();
  },
  computed: {
    ...mapState('documents', ['documents']),
    filteredItems() {
      const query = this.searchQuery.toLowerCase();
      return this.details.filter(item => 
        item.title.toLowerCase().includes(query) &&
        (this.selectedFilter === '' || item.category === this.selectedFilter)
      );
    }
  }
}
</script>
