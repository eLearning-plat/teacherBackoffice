<script setup lang="js">
import { RouterLink } from 'vue-router';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb';

const porps = defineProps({
  links: {
    type: Array,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Breadcrumb class="hidden md:flex">
    <BreadcrumbList>
      <template v-for="link in links" :key="link.id">
        <BreadcrumbItem>
          <BreadcrumbLink as-child>
            <RouterLink :to="link.link">{{ link.title }}</RouterLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </template>
      <BreadcrumbItem>
        <BreadcrumbPage>{{ page }}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
