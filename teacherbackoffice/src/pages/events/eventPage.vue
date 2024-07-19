<template>
  <div>
    <div class="demo-app w-full flex flex-col mt-2 md:flex-row">
      <!-- Sidebar -->
      <div class="demo-app-sidebar md:w-300px bg-gray-600 border-r-1 border-gray-600">
        <div class="demo-app-sidebar-section md:block hidden">
          <!-- Toggle des weekends -->
          <label class="text-white">
            <input
              type="checkbox"
              :checked="calendarOptions.weekends"
              @change="handleWeekendsToggle"
            />
            {{$t('Toggle weekends')}}
          </label>
        </div>
        <div class="demo-app-sidebar-section md:block hidden text-white">
          <!-- Tous les événements -->
          <h2 class="mb-2 ">{{$t('All Events')}} ({{ currentEvents.length }})</h2>
          <ul>
            <li v-for="event in currentEvents" :key="event.id" class="mb-1">
              <b>{{ event.startStr }}</b>
              <i>{{ event.title }}</i>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="demo-app-main flex-grow p-4">
        <FullCalendar
          class="demo-app-calendar"
          :options="calendarOptions"
          ref="calendarRef"
          @calendarApi="setCalendarApi"
        >
          <template v-slot:eventContent="arg">
            <b>{{ arg.timeText }}</b>
            <i>{{ arg.event.title }}</i>
          </template>
        </FullCalendar>
      </div>
    </div>
    
  
      
    <EventCreationModal
      :isOpen="isModalOpen"
      :eventDetails="eventDetails"
      @close="handleCloseModal"
      @add-event="handleAddEvent"
    />

    <EventEditModal
      :isOpen="isEditModalOpen"
      :currentEventDetails="currentEventDetails"
      @close="handleCloseEditModal"
      @update-event="handleUpdateEvent"
    />
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { createEventId } from './event-utils';
import EventCreationModal from '@/components/modal/EventCreationModal.vue';
import EventEditModal from '@/components/modal/EventEditModal.vue';

const { t } = useI18n();

const todayStr = new Date().toISOString().split('T')[0];
const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: t('allDayEvent'),
    start: todayStr,
  },
  {
    id: createEventId(),
    title: t('timedEvent'),
    start: todayStr + 'T12:00:00',
  },
];

const calendarOptions = ref({
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
  ],
  buttonText: {
    today: t('today'),
    month: t('month'),
    Week: t('week'),
    day: t('day')
  },
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  locale: 'en',
  dayNames: t('dayNames'),
  monthNames: t('monthNames'),
  initialView: 'dayGridMonth',
  initialEvents: INITIAL_EVENTS,
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
});

const calendarRef = ref(null);
const currentEvents = ref([]);

const isModalOpen = ref(false);
const isEditModalOpen = ref(false);
const eventDetails = ref({});
const currentEventDetails = ref({});

function handleDateSelect(selectInfo) {
  eventDetails.value = {
    start: selectInfo.startStr,
    end: selectInfo.endStr,
    allDay: selectInfo.allDay
  };
  isModalOpen.value = true;
}

function handleEventClick(clickInfo) {
  currentEventDetails.value = {
    id: clickInfo.event.id,
    title: clickInfo.event.title,
    start: clickInfo.event.startStr,
    end: clickInfo.event.endStr,
    allDay: clickInfo.event.allDay,
    description: clickInfo.event.extendedProps.description || ''
  };
  isEditModalOpen.value = true;
}

function handleEvents(events) {
  currentEvents.value = events;
}

function handleCloseModal() {
  isModalOpen.value = false;
}

function handleAddEvent(newEvent) {
  calendarRef.value.getApi().addEvent(newEvent);
  isModalOpen.value = false;
}

function handleCloseEditModal() {
  isEditModalOpen.value = false;
}

function handleUpdateEvent(updatedEvent) {
  const event = calendarRef.value.getApi().getEventById(updatedEvent.id);
  event.setProp('title', updatedEvent.title);
  event.setStart(updatedEvent.start);
  event.setEnd(updatedEvent.end);
  event.setExtendedProp('description', updatedEvent.description);
  event.setAllDay(updatedEvent.allDay);
  isEditModalOpen.value = false;
}

onMounted(() => {
  console.log('Calendar component mounted');
});
</script>

<style lang='css'>

h2 {
  margin: 0;
  font-size: 16px;
}

b { /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-size: 14px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background:gray ;
  border-right: 1px solid gray;
  border-radius: 0.375rem;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 1em;
}
.demo-app-calendar{
    height: 90vh;
  
}
.fc { /* the calendar root */
  max-width: 1200px;
  margin: 0 auto;

}

</style>
