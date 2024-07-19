<template>
  <div>
    <div class="flex flex-col min-h-[100dvh] bg-background mt-2 w-full">
      <div class="flex justify-end">
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Search"
          class="border-2 border-blue-500 rounded p-2 w-full mx-3 sm:w-1/3 md:w-1/3 text-blue-500 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          class="bg-blue-600 border-2 border-blue-600 shadow-md rounded-md p-2 text-white"
          @click="openModal"
        >
          <span class="text-white pi pi-plus"></span>
          {{ $t('Add Document') }}
        </button>
        <ModalAddDocument
          v-if="isModalOpen"
          :isOpen="isModalOpen"
          title="Add New Document"
          buttonText="Add Document"
          @add-Document="addCourse"
          @close="closeModal"
        />
      </div>
      <main class="flex-1  p-3 mt-3">
       
       <div class=" w-full mx-auto grid gap-8">
         
         <div class="grid gap-4 ">
           <h2 class="text-xl px-2 py-2 text-gray-500 font-bold border-b-2 border-gray-500 mb-4">
   Quranic Recitation Tajwid
 </h2>
           <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
           <cardsDocument/>
           <cardsDocument/>
           <cardsDocument/>
           <cardsDocument/>
           </div>
         </div>
         <div class="grid gap-4">
           <h2 class="text-xl px-2 py-2 text-gray-500 font-bold border-b-2 border-gray-500 mb-4">Sona</h2>
           <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
             <cardsDocument class="shadow-md"/>
             <cardsDocument/>
             <cardsDocument/>
             
           </div>
         </div>
         <div class="grid gap-4">
           <h2 class="text-xl px-2 py-2 text-gray-500 font-bold border-b-2 border-gray-500 mb-4">Arabic Language</h2>
           <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
             <cardsDocument class="shadow-md"/>
             <cardsDocument/>
             <cardsDocument/>
             <cardsDocument/>
             <cardsDocument/>
             <cardsDocument/>
           </div>
         </div>
         <div class="grid gap-4">
           <h2 class="text-xl px-2 py-2 text-gray-500 font-bold border-b-2 border-gray-500 mb-4">English Language</h2>
           <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
          
             <cardsDocument/>
             <cardsDocument/>
             <cardsDocument/>
           </div>
         </div>
         <div class="grid gap-4">
           <h2 class="text-xl px-2 py-2 text-gray-500 font-bold border-b-2 border-gray-500 mb-4">Computer</h2>
           <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
             <cardsDocument class="shadow-md"/>
             <cardsDocument/>
          
           </div>
         </div>
       </div>
       <footer> <paginaTion/></footer>
     
     </main>
     
   </div>
 </div>
</template>

<script>
import Breadcrumb from "primevue/breadcrumb";
import ModalAddDocument from "@/components/modal/modalAddDocument.vue";
import cardsDocument from '@/components/cards/cardsDocument.vue';
import paginaTion from '@/components/pagination/paginaTion.vue';

export default {
  name: 'documentPage',
  components: {
    cardsDocument,
    paginaTion,
    Breadcrumb,
    ModalAddDocument
  },
  data() {
    return {
      searchQuery: '',
      isModalOpen: false,
      rows: 100,     // Nombre total de lignes à paginer
      perPage: 1,    // Nombre d'éléments par page
      currentPage: 5,
      items: [
        { label: "Document" }
      ],
      home: {
        icon: "pi pi-home",
        to: "/"
      }
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addCourse() {
      // Logic for adding the course
      this.closeModal();
    }
  },
  computed: {
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
