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
import { defineProps, watch, defineEmits, ref } from "vue";
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      category: '',
    }),
  },
});

const emit = defineEmits(['update:modelValue']);

const category = ref({ ...props.modelValue });

watch(category, (newValue) => {
  emit('update:modelValue', newValue);
}, { deep: true });
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Course Category</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="grid gap-6 sm:grid-cols-3">
        <div class="grid gap-3">
          <Label for="category">Category</Label>
          <Select v-model="category.category">
            <SelectTrigger id="category" aria-label="Select category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sonna"> Sonna </SelectItem>
              <SelectItem value="qoran"> Qoran </SelectItem>
              <SelectItem value="tajwid"> Tajwid </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
