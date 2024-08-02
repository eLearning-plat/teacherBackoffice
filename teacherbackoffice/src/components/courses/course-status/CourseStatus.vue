<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
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
  <Card>
    <CardHeader>
      <CardTitle>Course Category</CardTitle>
    </CardHeader>
    <CardContent>
      <p v-if="courseDetail && courseDetail.category">
        {{ courseDetail.category }}
      </p>
      <p v-else>
        No category available.
      </p>
    </CardContent>
  </Card>
</template>
