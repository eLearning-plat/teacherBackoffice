<template>
    <div>

      <cardStatestic/>
    
    <div class="grid grid-cols-1 gap-2 p-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <Card class="border-2 border-gray-500 text-gray-500 rounded-md shadow-md">
    <div class="flex flex-col md:flex-row">
      <div class=" md:w-1/2">
        <SimpleCalendar />
      </div>
      <div class="p-4 mx-3 md:w-1/2">
        <CardContent class="mx-5">Description</CardContent>
      </div>
    </div>
  </Card>
<Card class="border-2 border-gray-500 text-gray-500  rounded-md shadow-md p-3">
    <documentComponent/>
</Card> </div>


<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-1 sm:grid-cols-1   lg:grid-cols-3 xl:grid-cols-3 container">
    <Card class="border-2 border-gray-500 text-gray-500  rounded-md shadow-md p-3">
    <chartComponent/>

</Card>
<Card class="border-2 border-gray-500 text-gray-500  rounded-md shadow-md p-3">
    <cerclChartComponent/>
</Card>
<Card class="border-2 border-gray-500 text-gray-500  rounded-md shadow-md p-3">
    <cerclChartComponent/>
</Card>
</div>
   
</div>
</template>
<script>
import SimpleCalendar from '@/components/dashBordComponent/SimpleCalendar.vue';
import chartComponent from '@/components/chart/chartComponent.vue';
import documentComponent from '@/components/document/documentComponent.vue';
import cerclChartComponent from '@/components/chart/cerculChartComponent.vue';
import cardStatestic from '@/components/cards/cardStatistic.vue';
import Button from "primevue/button";
import Breadcrumb from "primevue/breadcrumb";

export default {
    name: 'dashBord',
    components: { SimpleCalendar,
        documentComponent,
        chartComponent,
        cerclChartComponent,
        cardStatestic,
        Breadcrumb,
     },
     data(){
    return {
     
      home: {
        icon: "pi pi-home",
        to: "/"
      }
    }
  }

}
</script>
<style>
.calendar-container {
  max-width: 700px;
  margin: 0 auto;
}
</style>