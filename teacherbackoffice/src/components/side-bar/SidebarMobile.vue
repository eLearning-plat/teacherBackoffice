<template>
    <div class="card flex justify-center">
      <Sidebar v-model:visible="visible">
        <template #container="{ closeCallback }">
          <div class="flex flex-col h-full">
            <div class="flex items-center justify-between px-6 pt-4">
              <span class="inline-flex items-center gap-2">
                <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Votre logo SVG -->
                </svg>
                <span class="font-semibold text-2xl text-primary">Your Logo</span>
              </span>
              <span>
                <Button type="button" @click="closeCallback" icon="pi pi-times"  class="border-none border-white  bg-white text-black" ></Button>
              </span>
            </div>
            <div class="overflow-y-auto">
        
                <div v-for="(item, index) in items" :key="index">
                  <a
                    href="#"
                    class="flex items-center py-2 px-4 hover:bg-gray-100 no-underline p-3 font-medium"
                    :class="{
                      'bg-gray-300': isActive(item.label),
                      ' text-black': !isActive(item.label)
                    }"
                    @click="handleItemClick(item.label, $event)">
                    <span :class="item.icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge"></Badge>
                  </a>
                </div>
              
            </div>
          </div>
        </template>
      </Sidebar>
  
      <button @click="visible = true" class="border-none border-white  bg-white text-black block sm:hidden">
        <div class="pi pi-bars border-white"></div>
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import Sidebar from "primevue/sidebar";
  import Button from "primevue/button";
  
  export default {
    components: {
      Sidebar,
      Button,
    },
    data() {
      return {
        label: "Student Space",
        items: [
          {label:"DashBord", icon:"pi pi-objects-column"},
          { label: "Course", icon: "pi pi-book" },
          { label: "Profile", icon: "pi pi-user" },
          { label: "Document", icon: "pi pi-briefcase" },
          { label: "Event", icon: "pi pi-calendar" },
        ],
        visible: false,
        activePath: "DashBord", // Définir le lien actif par défaut
      };
    },
    methods: {
      handleItemClick(label, event) {
        this.activePath = label; // Mettre à jour le lien actif
        this.visible = false; // Fermer le Sidebar
        event.preventDefault(); // Empêcher le comportement de lien par défaut
        const path = `/${label.toLowerCase()}`;
        this.$router.push(path); // Utiliser Vue Router pour naviguer vers la nouvelle URL
      },
      isActive(label) {
        return this.activePath === label;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajouter des styles Tailwind personnalisés si nécessaire */
  </style>
  
  