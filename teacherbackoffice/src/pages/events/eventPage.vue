<template>
  <div>  
    <Breadcrumb :home="home" :model="items" />
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
  >
    <template v-slot:eventContent="arg">
      <b>{{ arg.timeText }}</b>
      <i>{{ arg.event.title }}</i>
    </template>
  </FullCalendar>
    </div>
  </div>
  </div>
 
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { createEventId } from './event-utils';
import Breadcrumb from "primevue/breadcrumb";
const home = ref({
  icon: "pi pi-home",
});
const items = ref([
  { label: "Event" },

]);
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

const calendarOptions = {
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin // needed for dateClick
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
  locale: 'ar',
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
};

let currentEvents = ref([]);

function handleWeekendsToggle() {
  calendarOptions.weekends = !calendarOptions.weekends; // update a property
}

function handleDateSelect(selectInfo) {
  let title = prompt('Please enter a new title for your event');
  let calendarApi = selectInfo.view.calendar;

  calendarApi.unselect(); // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    });
  }
}

function handleEventClick(clickInfo) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove();
  }
}

function handleEvents(events) {
  currentEvents.value = events;
}
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
