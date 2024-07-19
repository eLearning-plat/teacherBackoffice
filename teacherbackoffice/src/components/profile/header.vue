<template>
  <header
    class="bg-gray-500  text-white p-6 rounded-lg flex items-center gap-6 shadow-md"
  >
    <!-- <Avatar icon="pi pi-user" class="w-16 h-16" size="xlarge" shape="circle" /> -->
    <img src=" @/assets/vuex.png" class="mr-2 p-2 w-20 h-20" />

    <div class="grid gap-1 mt-4">
      <h2 class="text-xl font-semibold">Acme User</h2>
      <p class="text-muted-foreground">Software Engineer</p>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderPage",
};
</script>
