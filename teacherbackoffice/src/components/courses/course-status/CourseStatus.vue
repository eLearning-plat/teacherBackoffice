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
   
    </CardContent>
  </Card>
</template>
