<script setup lang="js">
import { ref } from 'vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Label } from '../../ui/label';
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
      <div >
        <CardTitle>Course Details</CardTitle>
    
          
      </div>
    </CardHeader>
    <CardContent>
      <p v-if="courseDetail && courseDetail.description">
        {{ courseDetail.description }}
      </p>
      <p v-else>
        No description available.
      </p>
    </CardContent>
  </Card>
</template>