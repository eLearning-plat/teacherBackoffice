<template>
  <div class="">
    <Breadcrumb :home="home" :model="items" />
    <div class=" md:my-12">
      <div class="flex flex-wrap justify-center gap-4 md:gap-6">
        <Button
          variant="outline"
          class="rounded-full px-4 py-2 text-sm text-blue-600 font-medium border-blue-600 border-2"
        >
         {{ $t('All Events') }}
        </Button>
        <Button
          variant="outline"
          class="rounded-full px-4 py-2 text-sm font-medium text-green-600 border-green-600 border-2"
        >
          {{ $t('Quranic Recitation Tajwid') }}
        </Button>
        <Button
          variant="outline"
          class="rounded-full px-4 py-2 text-sm font-medium text-red-600 border-red-600 border-2"
        >
          {{ $t('Sona') }}
        </Button>
        <Button
          variant="outline"
          class="rounded-full px-4 py-2 text-sm font-medium text-yellow-600 border-yellow-600 border-2 shadow-slate-50"
        >
          {{ $t('Arabic Language') }}
        </Button>
        <Button
          variant="outline"
          class="rounded-full px-4 py-2 text-sm font-medium text-orange-600 border-orange-600 border-2"
        >
          {{ $t('English Language') }}
        </Button>
        <Button
          variant="outline"
          class="rounded-full px-4 py-2 text-sm font-medium text-yellow-600 border-yellow-600 border-2"
        >
          {{ $t('Computer') }}
        </Button>
      </div>
    </div>
    <div
      class=" grid grid-cols-1 mt-2 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <cardCours
        v-for="(detail, index) in details"
        :key="index"
        :detail="detail"
        :details="goToDetails"
      />
    </div>
   <paginaTion/>
  </div>
</template>
<script>
import Breadcrumb from "primevue/breadcrumb";
import cardCours from "@/components/cards/cardCours.vue";
import paginaTion from "@/components/pagination/paginaTion.vue";
export default {
  name: "coursePage",
  components: {
    cardCours,
    paginaTion,
    Breadcrumb,
  },
  data() {
    return {
      details: [
        {
          title: "Detail 1",
          description: "Description 1",
          url: "http://example.com/1",
        },
        {
          title: "Detail 2",
          description: "Description 2",
          url: "http://example.com/2",
        },
        {
          title: "Detail 3",
          description: "Description 3",
          url: "http://example.com/3",
        },
      ],
      items:[
        { label: "Courses" },
      ],
      home: {
        icon: "pi pi-home",
        to: "/"
      }
      
    };
  },
  methods: {
    goToDetails() {
      this.$router.push("/courseDetails");
    },
  },
};
</script>
