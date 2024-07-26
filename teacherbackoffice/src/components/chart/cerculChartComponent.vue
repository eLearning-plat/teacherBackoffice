<template>
    <div>
      <v-chart :option="chartOption" class="chart-container"></v-chart>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
  import VChart from 'vue-echarts';
  
  use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);
  
  export default defineComponent({
    name:'cerclChartComponent',
    components: {
      VChart
    },
    setup() {
      const chartOption = ref({
       
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Sales',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Mail Ad' },
              { value: 234, name: 'Affiliate Ad' },
              { value: 135, name: 'Video Ad' },
              { value: 1548, name: 'Search Engine' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
  