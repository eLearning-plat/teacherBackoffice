<template>
  <div class="container my-4">
    <BreadCrumb :links="links" :page="page" class="mt-2" />
    <headerComponent />
    <Card class="mt-3">
      <div class="flex flex-col min-h-[100dvh] bg-background mt-2 w-full">
        <mainDocument />
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
  name: "EnglishLanguagePage",
  components: {
    headerComponent,
    paginaTion,
    mainDocument,
    BreadCrumb,
    Card,
  },
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 5,
      page: "Document > English Language",
      links: [
        {
          id: 1,
          title: "Student Space",
          link: "",
        },
      ],
    };
  },
};
</script>
