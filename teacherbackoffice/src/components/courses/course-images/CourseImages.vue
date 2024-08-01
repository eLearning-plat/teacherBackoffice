<script setup>
import { Upload } from "lucide-vue-next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { defineProps } from 'vue';

const props = defineProps({
  courseDetail: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <Card class="overflow-hidden">
    <CardHeader>
      <CardTitle>Course imgs</CardTitle>
      <CardDescription> Upload your images here </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-2">
        <img
          alt="Product image"
          class="aspect-square w-full rounded-md object-cover"
          height="300"
          :src="courseDetail.imageUrl"
          width="300"
        />
       
      </div>
    </CardContent>
  </Card>
</template>
