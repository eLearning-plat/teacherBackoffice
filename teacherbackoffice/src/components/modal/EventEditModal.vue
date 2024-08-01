<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg w-2/4 p-6 relative">
      <button @click="handleClose" class="absolute font-bold right-6 text-gray-600 hover:text-gray-900">
        &times;
      </button>
      
      <h2 class="text-xl font-semibold text-blue-600">{{ $t('Edit Event') }}</h2>
      
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
            v-model="formattedStart"
            @input="updateStartDate"
            class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
          />
        </div>
        <div class="mb-4">
          <input
            type="datetime-local"
            v-model="formattedEnd"
            @input="updateEndDate"
            class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
          />
        </div>
        <div class="mb-4">
          <input
            v-model="currentEventDetails.url"
            type="text"
            placeholder="Event url"
            class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
          />
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {{ $t('Update Event') }}
          </button>
          <button
            type="button"
            @click="handleDeleteEvent"
            class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
          >
            {{ $t('Delete Event') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  isOpen: Boolean,
  currentEventDetails: Object
});
const emits = defineEmits(['close', 'update-event']);

const store = useStore();

function formatDateForInput(date) {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const formattedStart = computed(() => formatDateForInput(props.currentEventDetails.start));

const formattedEnd = computed(() => formatDateForInput(props.currentEventDetails.end));
function handleClose() {
  emits('close');
}

function updateStartDate(event) {
  const newDate = new Date(event.target.value);
  props.currentEventDetails.start = newDate.toISOString();
}
function updateEndDate(event) {
  const newDate = new Date(event.target.value);
  props.currentEventDetails.end = newDate.toISOString();
}
function handleUpdateEvent() {
  emits('update-event', props.currentEventDetails);
  handleClose(); 
}

function handleDeleteEvent() {
  store.dispatch('meetings/deleteMeeting', props.currentEventDetails.id).then(() => {
    emits('close');
  }).catch(error => {
    console.error('Error deleting event:', error);
  });
}
</script>

  