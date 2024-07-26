<script setup lang="js">
import BarChart from '../ui/chart-bar/BarChart.vue';

const data = [
  { name: 'Jan', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Feb', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Mar', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Apr', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'May', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jun', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jul', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Aug', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Sep', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Oct', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Nov', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Dec', Quranic: Math.floor(Math.random() * 5000) + 1000, Sona: Math.floor(Math.random() * 5000) + 1000, Arabic: Math.floor(Math.random() * 5000) + 1000, English: Math.floor(Math.random() * 5000) + 1000, Computer: Math.floor(Math.random() * 5000) + 1000 },
]
const colors = [
  '#E0F7FA', 
  '#B2EBF2', 
  '#4DD0E1',
  '#26C6DA', 
  '#00ACC1'  
];
</script>

<template>
  <BarChart
    :data="data"
    :categories="['Quranic', 'Sona', 'Arabic', 'English', 'Computer']"
    :index="'name'"
    :colors="colors"
    :rounded-corners="4"
  />
</template>
