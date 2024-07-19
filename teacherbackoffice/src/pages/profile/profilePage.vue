<template>
  <div class="flex flex-col gap-6 w-full mt-2 rounded-md">
    <Breadcrumb :home="home" :model="items" class="mb-2" />
    <HeaderPage />
    <AboutPage />
  </div>
</template>

<script>
import Breadcrumb from "primevue/breadcrumb";
import HeaderPage from "@/components/profile/header.vue";
import AboutPage from "@/components/profile/about.vue";
export default {
  name: "profilePage",
  components: {
    HeaderPage,
    AboutPage,
    Breadcrumb,
  },
  data(){
    return {
      items:[
        { label: "Profile" }
      ],
      home: {
        icon: "pi pi-home",
        to: "/"
      }
    }
  }
};
</script>
