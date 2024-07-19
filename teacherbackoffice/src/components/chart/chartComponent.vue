<template>
    <div>
      <v-chart :option="chartOption" class="chart-container w-3"></v-chart>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { BarChart } from 'echarts/charts';
  import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
  import VChart from 'vue-echarts';
  
  use([CanvasRenderer, BarChart, GridComponent, TooltipComponent, TitleComponent]);
  
  export default defineComponent({
    name:'chartComponent',
    components: {
      VChart
    },
    setup() {
      const chartOption = ref({
        title: {
          text: 'Sales Data'
        },
        tooltip: {},
        xAxis: {
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        yAxis: {},
        series: [
          {
            name: 'Sales',
            type: 'bar',
            data: [30, 50, 40, 60, 45]
          }
        ]
      });
  
      return {
        chartOption
      };
    }
  });
  </script>
  

  <style>
.chart-container {
  width: 100%;
  height: 50vh; /* Utiliser une unité relative pour la hauteur */
  max-width: 100vw; /* S'assurer que la largeur ne dépasse pas celle de la fenêtre */
}

/* Media queries pour ajuster la hauteur en fonction de la taille de l'écran */
@media (max-width: 1200px) {
  .chart-container {
    height: 60vh; /* Augmentez la hauteur sur des écrans plus petits */
  }
}

@media (max-width: 768px) {
  .chart-container {
    height: 70vh; /* Augmentez encore plus la hauteur sur des écrans encore plus petits */
  }
}

@media (max-width: 480px) {
  .chart-container {
    height: 80vh; /* Augmentez au maximum la hauteur sur les petits écrans */
  }
}
</style>
  
  