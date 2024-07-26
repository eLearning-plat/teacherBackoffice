<template>
  <div class="container">
    <BreadCrumb :links="links" :page="page" class="mt-3"/>

    <Card class="mt-4">
      <CardContent class="px-0">
        <div class="demo-app w-full flex flex-col md:flex-row">
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
                <p>{{ arg.event.extendedProps.description }}</p>
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
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import BreadCrumb from '../../components/bread-crumb/BreadCrumb.vue'
import EventCreationModal from '@/components/modal/EventCreationModal.vue';
import EventEditModal from '@/components/modal/EventEditModal.vue';
import CardContent from '../../components/ui/card/CardContent.vue';
import Card from '../../components/ui/card/Card.vue';
import { createEventId } from './event-utils.js';

const { t } = useI18n();
const links = [{ id: 1, title: 'Student Space', link: '/' }];
const page = "Event";
const todayStr = new Date().toISOString().split('T')[0];
const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: t('allDayEvent'),
    start: todayStr,
    extendedProps: { description: 'This is an all-day event description' }
  },
  {
    id: createEventId(),
    title: t('timedEvent'),
    start: todayStr + 'T12:00:00',
    extendedProps: { description: 'This is a timed event description' }
  },
];

const calendarOptions = ref({
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
    listPlugin
  ],
  buttonText: {
    today: t('today'),
    month: t('month'),
    week: t('week'),
    day: t('day'),
    list: t('agenda')
  },
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
  },
  locale: 'en',
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
.bgAsidbar{
  background: #f0f2f4;
  height: 100vh;
 
}
.demo-app {
  display: flex;
  min-height: 100%;
  font-size: 14px;
}

/* .demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background:gray ;
  border-right: 1px solid gray;
  border-radius: 0.375rem;
} */

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
.fc .fc-button-primary {
    background-color: white !important;
    color: #262626 !important;
    border-color:  #4e4e4f !important;
 
}
.fc .fc-button-group > .fc-button {
   box-shadow: none !important;
}
.fc .fc-button-primary:not(:disabled).fc-button-active, .fc .fc-button-primary:not(:disabled):active {
  
    box-shadow: none !important;
}
</style>
