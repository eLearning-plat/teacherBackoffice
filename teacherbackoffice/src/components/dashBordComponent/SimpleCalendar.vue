<template>
    <div class="simple-calendar">
      <div class="calendar-header">
        <button @click="previousMonth">&lt;</button>
        <h2>{{ currentMonth }}</h2>
        <button @click="nextMonth">&gt;</button>
      </div>
      <div class="calendar-days">
        <div v-for="day in daysInMonth" :key="day" :class="['calendar-day', { 'current-day': isCurrentDay(day) }]">
          {{ day }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  };
  
  const currentDate = new Date();
  const year = ref(currentDate.getFullYear());
  const month = ref(currentDate.getMonth());
  
  const currentMonth = computed(() => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[month.value]} ${year.value}`;
  });
  
  const daysInMonth = computed(() => getDaysInMonth(year.value, month.value));
  
  const isCurrentDay = (day) => {
    const today = new Date();
    return year.value === today.getFullYear() && month.value === today.getMonth() && day === today.getDate();
  };
  
  const nextMonth = () => {
    if (month.value === 11) {
      year.value++;
      month.value = 0;
    } else {
      month.value++;
    }
  };
  
  const previousMonth = () => {
    if (month.value === 0) {
      year.value--;
      month.value = 11;
    } else {
      month.value--;
    }
  };
  </script>
  
  <style scoped>
.simple-calendar {
  max-width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  padding: 10px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-header button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.calendar-day {
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
}

.current-day {
  background-color: #f0f0f0; /* Couleur de fond pour le jour actuel */
}

@media (max-width: 768px) {
  .simple-calendar {
    padding: 5px;
  }

  .calendar-header button {
    font-size: 16px;
    padding: 4px;
  }

  .calendar-day {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .calendar-header {
    flex-direction: column;
    align-items: center;
  }

  .calendar-header button {
    font-size: 14px;
    padding: 3px;
  }

  .calendar-header h2 {
    margin: 5px 0;
  }

  .calendar-day {
    padding: 6px;
  }
}
</style>
