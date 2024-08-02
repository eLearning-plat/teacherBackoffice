<template>
  <div class="container">
    <BreadCrumb :links="links" :page="page" class="mt-3" />
    <calendarEvent />
  </div>
</template>

<script setup>
import calendarEvent from "../../components/calendar/calendarEvent.vue";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb.vue";
const links = [{ id: 1, title: "Teacher Space", link: "/" }];
const page = "Event";
</script>
