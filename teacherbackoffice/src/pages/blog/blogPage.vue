<template>
  <div class="flex flex-col h-screen">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 p-4">
      <main>
        <card-blog />
      </main>
      <aside class="hidden lg:block">
        <aside-bar class="highte mb-4"/>
      </aside>
    </div>
    <aside class="block lg:hidden p-4">
      <aside-bar />
    </aside>
    <blog-modal :visible="isModalVisible" @close="closeModal">
      <p>Content of the detailed blog post goes here...</p>
    </blog-modal>
  </div>
</template>

<script>
import asideBar from '@/components/bogs/asideBar.vue';
import blogModal from '@/components/modal/blogModal.vue';
import cardBlog from '@/components/cards/cardBlog.vue';
import { mapActions, mapState } from 'vuex';
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "blogPage",
  components: {
    asideBar,
    blogModal,
    cardBlog
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  setup() {
    const { getAccessTokenSilently } = useAuth0();
    return { getAccessTokenSilently };
  },
  methods: {
    ...mapActions('blogs', ['fetchBlogs']),
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  async created() {
  try {
    const token = await this.getAccessTokenSilently();
    console.log('component created',token);
    await this.fetchBlogs(token);
    console.log('blogs fetched', this.blogs);
  } catch (error) {
    console.log('error', error);
  }
},
  computed: {
    ...mapState('blogs', ['blogs'])
  }
};
</script>