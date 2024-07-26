<template>
  <div class="container my-4">
    <BreadCrumb :links="links" :page="page" class="mt-2"/>
    <header class="sticky mt-3 top-0 z-30 border-b bg-background px-4 sm:static sm:border-0 sm:bg-transparent sm:px-6">
  <div class="flex flex-col sm:flex-row justify-between items-center gap-4">

    <!-- Search and button section -->
    <div class="flex flex-col w-full sm:flex-row sm:items-center sm:gap-4">
      <div class="relative flex-grow sm:flex-grow-0 w-full sm:w-auto">
        <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          v-model="searchQuery"
          type="search"
          placeholder="Search..."
          class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>

      <button
        class="w-full sm:w-auto bg-blue-600 border-2 border-blue-600 shadow-md rounded-md p-2 text-white"
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
  </div>
</header>

    <Card class="mt-3">
      <CardContent>
    <div class="flex flex-col min-h-[100dvh] bg-background mt-2 w-full">
     
      <main class="flex-1  p-3 mt-3">
       
       <div class=" w-full mx-auto grid gap-8">
         
         <div class="grid gap-4">
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
             <cardsDocument class="shadow-md"/>
             <cardsDocument/>
             <cardsDocument/>
             <cardsDocument/>
             <cardsDocument/>
             <cardsDocument/>
           </div>
         </div>
    
       </div>
       <footer> <paginaTion/></footer>
     
     </main>
     
   </div></CardContent></Card>
 </div>
</template>
  
  <script>
  import {
  ChevronLeft,
  Search
} from 'lucide-vue-next'
  import BreadCrumb from '../../components/bread-crumb/BreadCrumb.vue'
  import ModalAddDocument from "@/components/modal/modalAddDocument.vue";
  import cardsDocument from '@/components/cards/cardsDocument.vue';
  import paginaTion from '@/components/pagination/paginaTion.vue';
  import Card from '../../components/ui/card/Card.vue';
  import CardContent from '../../components/ui/card/CardContent.vue';

import Input from '../../components/ui/input/Input.vue'
  export default {
    name: 'SonaPage',
    components: {
      cardsDocument,
      paginaTion,ChevronLeft,
      Search,Input,
      ModalAddDocument,BreadCrumb,Input, Card,CardContent
    },
    data() {
      return {
        searchQuery: '',
        isModalOpen: false,
        rows: 100,   
        perPage: 1,    
        currentPage: 5,
        page:'Document > Sona',
      links:[
    {
        id: 1,
        title: 'Student Space',
        link: '',
    }
],
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
  