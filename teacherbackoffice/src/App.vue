<script setup>
import Breadcrumb from "primevue/breadcrumb";
import AppBar from "./components/app-bar/AppBar.vue";
import SideBar from "./components/side-bar/SideBar.vue";
import Button from "primevue/button";

import { ref } from "vue";

const home = ref({
  icon: "pi pi-home",
});
const items = ref([
  { label: "Electronics" },

]);
</script>
<template>
  <div class="flex flex-col h-screen">
    <AppBar class="h-[4rem]" />
    <div class="flex flex-row flex-1 overflow-hidden">
      <div
        class="hidden sm:block fixed top-[4rem] h-[calc(100vh-4rem)] w-[15rem]"
      >
        <SideBar class="h-full" />
      </div>
      <div class="w-full sm:ml-[12rem] overflow-y-auto p-4">
    
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* src/assets/styles.css */
body {
  direction: rtl;
  text-align: right;
}
</style>
