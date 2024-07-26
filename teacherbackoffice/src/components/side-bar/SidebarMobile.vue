<template>
    <div class="card flex justify-center">
    55
    </div>
  </template>
  
  <script>
  import { ref } from "vue";

  
  export default {
   
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
  
  