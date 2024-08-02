<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg w-2/4 p-6 relative">
      <button @click="close" class="absolute font-bold right-6 text-gray-600 hover:text-gray-900">
        &times;
      </button>

      <h2 class="text-xl font-semibold text-blue-600">{{$t('Create Event')}}</h2>
      <form @submit.prevent="addEvent">
        <div class="mb-4">
          <input
            v-model="event.title" id="title" required
            type="text"
            placeholder="Event Title"
            class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
          />
        </div>
        <div class="mb-4">
          <textarea
            v-model="event.description" id="description"
            placeholder="Event Description"
            class="w-full border-2 text-gray-400 border-gray-400 rounded-md p-2"
          ></textarea>
        </div>
        <div class="mb-4">
          <input
            type="datetime-local"
            v-model="formattedStart" id="start" required
            class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
          />
        </div>
        <div class="mb-4">
          <input
            type="datetime-local"
            v-model="formattedEnd" id="end" required
            class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
          />
        </div>
        <div class="mb-4">
          <input
            type="url"
            v-model="event.url" id="url" required
            class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
          />
        </div>
        <div class="mb-4">
          <select v-model="selectedCourse" class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2">
            <option v-for="course in courses" :key="course._id" :value="course._id">
              {{ course.title }}
            </option>
          </select>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {{$t('Add Event')}}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  isOpen: Boolean,
  eventDetails: Object,
});

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

const formattedStart = computed(() => formatDateForInput(props.eventDetails.start));
const formattedEnd = computed(() => formatDateForInput(props.eventDetails.end));

const emit = defineEmits(['close', 'add-event']);

const store = useStore();

const event = ref({
  title: '',
  start: '',
  end: '',
  url: '',
  description: ''
});

const selectedCourse = ref('');

const addEvent = async () => {
  const newEvent = {
    title: event.value.title,
    url: event.value.url,
    date: formattedStart.value,
    endDate: formattedEnd.value,
    description: event.value.description || 'No description provided',
    courseId: selectedCourse.value
  };

  try {
    console.log('newEvent ',newEvent)
    const response = await store.dispatch('meetings/addMeeting', newEvent);
    emit('add-event', response);
    resetForm();
    close();
  } catch (error) {
    console.error('Failed to add event:', error);
  }
};

const resetForm = () => {
  event.value = {
    title: '',
    start: '',
    end: '',
    url: '',
    description: ''
  };
  selectedCourse.value = '';
};

const close = () => {
  emit('close');
};

const courses = computed(() => store.getters['courses/allCourses']);

onMounted(() => {
  store.dispatch('courses/fetchCourses');
});
</script>
