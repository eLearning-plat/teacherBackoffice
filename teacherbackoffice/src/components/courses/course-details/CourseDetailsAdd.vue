<script setup lang="js">
import { ref, defineEmits, defineProps, watch } from 'vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      title: '',
      image: null,
      description: '',
    }),
  },
});

const emit = defineEmits(['update:modelValue']);

const courseDetails = ref({ ...props.modelValue });

function handleFileChange(event) {
  const file = event.target.files[0];
  console.log('Selected file:', file);
  if (file) {
    courseDetails.value.image = file;
    emit('update:modelValue', { ...courseDetails.value });
  }
}

watch(courseDetails, (newValue) => {
  emit('update:modelValue', newValue);
}, { deep: true });
</script>


<template>
  <Card>
    <CardHeader>
      <CardTitle>Course Details</CardTitle>
      <CardDescription>
        Fill in the details of the course you want to create.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-6">
        <div class="grid gap-3">
          <Label for="title">title</Label>
          <Input
            id="title"
            type="text"
            class="w-full"
            v-model="courseDetails.title"
          />
        </div>
        <div class="grid gap-3">
          <Label for="file-upload">Upload</Label>
          <Input
            id="file-upload"
            type="file"
            class="w-full"
            @change="handleFileChange"
          />
        </div>
        <div class="grid gap-3">
          <Label for="description">Description</Label>
          <Textarea
            id="description"
            class="min-h-32"
            v-model="courseDetails.description"
          />
        </div>
      </div>
    </CardContent>
  </Card>
</template>
