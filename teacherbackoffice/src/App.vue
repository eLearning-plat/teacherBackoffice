<script setup lang="js">
import AppBar from "@/components/app-bar/AppBar.vue";
import SideBar from "@/components/side-bar/SideBar.vue";
</script>

<template>
  <div class="flex flex-col h-screen ">
    <AppBar />
    <div class="flex flex-row w-full" :style="{ height: 'calc(100vh - 64px)' }">
      <div class="hidden sm:block">
        <SideBar />
      </div>
      <router-view class="flex-grow overflow-auto mt-0 bg-muted/40" />
    </div>
  </div>
</template>
<style >
body{
  overflow-y: hidden;
}
</style>
