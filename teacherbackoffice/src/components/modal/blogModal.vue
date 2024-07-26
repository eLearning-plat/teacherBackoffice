<template>
    <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded shadow-lg w-1/2">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl">Detailed Blog Post</h2>
          <button @click="close" class="text-gray-700 hover:text-black">X</button>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "blogModal",
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  