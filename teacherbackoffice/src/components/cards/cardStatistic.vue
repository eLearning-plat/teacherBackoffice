<template>
  <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
    <Card v-for="card in data" :key="card.title">
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">
          {{ card.title }}
        </CardTitle>
        <component
          :is="getIconComponent(card.icon)"
          class="h-4 w-4 text-muted-foreground" 
        ></component>
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">
          {{ card.value }}
        </div>
        <p class="text-xs text-muted-foreground">
          {{ card.description }}
        </p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="js">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Book, Users, File, Video } from 'lucide-vue-next'

const icons = {
  Book,
  Users,
  File,
  Video,
}

const getIconComponent = (iconName) => icons[iconName];

const data = [
  {
    title: "Total Courses",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: "Book",
  },
  {
    title: "Subscriptions",
    value: "+2350",
    description: "+180.1% from last month",
    icon: "Users",
  },
  {
    title: "Document",
    value: "+12,234",
    description: "+19% from last month",
    icon: "File",
  },
  {
    title: "Meeting",
    value: "+573",
    description: "+201 since last hour",
    icon: "Video",
  },
];
</script>
