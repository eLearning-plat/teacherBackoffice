<script setup lang="js">
import AreaChart from '../ui/chart-area/AreaChart.vue';

// Données pour le graphique
const data = [
  { name: 'Jan', Meeting: Math.floor(Math.random() * 2000) + 500, course: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', Meeting: Math.floor(Math.random() * 2000) + 500, course: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', Meeting: Math.floor(Math.random() * 2000) + 500, course: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Apr', Meeting: Math.floor(Math.random() * 2000) + 500, course: Math.floor(Math.random() * 2000) + 500 },
  { name: 'May', Meeting: Math.floor(Math.random() * 2000) + 500, course: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jun', Meeting: Math.floor(Math.random() * 2000) + 500, course: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jul', Meeting: Math.floor(Math.random() * 2000) + 500, course: Math.floor(Math.random() * 2000) + 500 },
];

// Couleurs pour les catégories avec un dégradé de vert
const colors = ['#81C784', '#388E3C']; // Vert clair et vert foncé
</script>

<template>
  <AreaChart
    :data="data"
    index="name"
    :categories="['Meeting', 'course']"
    :colors="colors"
  />
</template>
