<template>
  <div>
    <Breadcrumb :home="home" :model="items" class="mb-2" />
      <div class="flex flex-col min-h-[100dvh] bg-background mt-2  w-full ">
      <!-- <header class="bg-gray-500 mb-3  text-white py-8 px-4 rounded-md  md:px-6">
        
        <div class=" max-w-4xl mx-auto ">
          <h1 class="text-3xl font-bold ">Ressources pour les étudiants</h1>
          <p class="mt-2 text-lg text-primary-foreground/80">
            Découvrez une sélection de guides, tutoriels et conseils pour vous aider dans vos études.
          </p>
        </div>
      </header> -->
      <div class="flex justify-end">
      <input v-model="value3" type="text" size="large" placeholder="search" class="border-gray-300 border-2  rounded-md w-1/3 p-2 "/>
    </div>
      <main class="flex-1  p-3 mt-3">
       
        <div class=" w-full mx-auto grid gap-8">
          
          <!-- <div class="grid gap-4 ">
            <h2 class="text-2xl px-2 font-bold">Tutoriels</h2>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            <cardsDocument/>
            <cardsDocument/>
            <cardsDocument/>
            <cardsDocument/>
            </div>
          </div> -->
          <div class="grid gap-4">
            <!-- <h2 class="text-2xl font-bold px-2">Document</h2> -->
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
      
    </div>
  </div>
</template>
<script>
import Breadcrumb from "primevue/breadcrumb";
import cardsDocument from '@/components/cards/cardsDocument.vue';
import paginaTion from '@/components/pagination/paginaTion.vue';
export default {
    name:'documentPage',
    components:{
      cardsDocument,
      paginaTion,
      Breadcrumb,
    },
    data() {
    return {
      rows: 100,     // Nombre total de lignes à paginer
      perPage: 1,    // Nombre d'éléments par page
      currentPage: 5 ,
      items:[
        { label: "Document" }
      ],
      home: {
        icon: "pi pi-home",
        to: "/"
      }
    };
  }
}
</script>