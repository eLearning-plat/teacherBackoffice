<template>
    <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg w-2/4 p-6 relative">
        <button @click="handleClose" class="absolute font-bold right-6 text-gray-600 hover:text-gray-900">
          &times;
        </button>
        
        <h2 class="text-xl font-semibold text-blue-600">{{$t('Edit Event')}}</h2>
        
        <form @submit.prevent="handleUpdateEvent">
          <div class="mb-4">
            <input
              v-model="currentEventDetails.title"
              type="text"
              placeholder="Event Title"
              class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
            />
          </div>
          <div class="mb-4">
            <textarea
              v-model="currentEventDetails.description"
              placeholder="Event Description"
              class="w-full border-2 text-gray-400 border-gray-400 rounded-md p-2"
            ></textarea>
          </div>
          <div class="mb-4">
            <input
              type="datetime-local"
              v-model="currentEventDetails.start"
              class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
            />
          </div>
          <div class="mb-4">
            <input
              type="datetime-local"
              v-model="currentEventDetails.end"
              class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
            />
          </div>
          <div class="mb-4">
            <input
              type="checkbox"
              v-model="currentEventDetails.allDay"
            />
            {{$t('All Day Event')}}
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {{$t('Update Event')}}
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isOpen: Boolean,
    currentEventDetails: Object
  });
  
  const emits = defineEmits(['close', 'update-event']);
  
  function handleClose() {
    emits('close');
  }
  
  function handleUpdateEvent() {
    emits('update-event', props.currentEventDetails);
  }
  </script>
  