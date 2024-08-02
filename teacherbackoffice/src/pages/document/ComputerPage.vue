<template>
  <div class="container my-4">
    <BreadCrumb :links="links" :page="page" class="mt-2" />
    <headerComponent  :category="category"/>
    <Card class="mt-3">
      <div class="flex flex-col min-h-[100dvh] bg-background mt-2 w-full">
        <mainDocument :category="category"/>
        <footer><paginaTion /></footer>
      </div>
    </Card>
  </div>
</template>

<script>
import mainDocument from "@/components/document/mainDocument.vue";
import headerComponent from "../../components/document/headerComponent.vue";

import paginaTion from "@/components/pagination/paginaTion.vue";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb.vue";
import Card from "../../components/ui/card/Card.vue";
export default {
  name: "ComputerPage",
  components: {
    headerComponent,
    paginaTion,
    mainDocument,
    BreadCrumb,
    Card,
  },
  data() {
    return {
      searchQuery: "",
      isModalOpen: false,
      rows: 100, 
      perPage: 1, 
      currentPage: 5,
      page: "Document > Computer",
      links: [
        {
          id: 1,
          title: "Student Space",
          link: "",
        },
      ],
      category: "Computer", 
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
    
      this.closeModal();
    },
  },
  computed: {
    filteredItems() {
      const query = this.searchQuery.toLowerCase();
      return this.details.filter(
        (item) =>
          item.title.toLowerCase().includes(query) &&
          (this.selectedFilter === "" || item.category === this.selectedFilter)
      );
    },
  },
};
</script>
