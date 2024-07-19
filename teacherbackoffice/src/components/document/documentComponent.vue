<template>
  <!-- Tableau de documents avec condition d'overflow -->
  <div class="mt-2" :class="{ 'overflow-auto': documentsHeight > 2 }">
    <div class="grid grid-cols-1 gap-2" ref="documentsContainer">
      <div v-for="document in documents" :key="document.id" class="p-2 flex">
        <img :src="document.image" alt="Document Image" class="w-16 h-16 object-cover mr-4">
        <div>
          <h3 class="text-lg font-bold">{{ document.title }}</h3>
          <p class="text-gray-700">{{ document.description }}</p>
          <p class="text-sm text-gray-500">{{[$t('Author')]}}: {{ document.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name:'documentComponent',
  setup() {
    const documents = [
      {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: 'Document 1',
        description: 'Description for document 1',
        author: 'Author 1'
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: 'Document 2',
        description: 'Description for document 2',
        author: 'Author 2'
      }
    ];

    const documentsContainer = ref(null);
    let documentsHeight = ref(0);

    onMounted(() => {
      if (documentsContainer.value) {
        documentsHeight.value = documentsContainer.value.clientHeight / window.innerHeight * 100;
      }
    });

    return {
      documents,
      documentsContainer,
      documentsHeight
    };
  }
};
</script>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>


