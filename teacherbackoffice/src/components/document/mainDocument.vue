<template>
  <main class="flex-1 p-3 mt-3">
    <div class="w-full mx-auto grid gap-8">
      <div class="grid gap-4">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
          <cardsDocument class="shadow-md" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import cardsDocument from "../cards/cardsDocument.vue";
</script>
