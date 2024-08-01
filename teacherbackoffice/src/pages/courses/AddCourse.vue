<script setup lang="js">
import {
  ChevronLeft,
  Search
} from 'lucide-vue-next'

import { ref, defineEmits, defineProps } from 'vue';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import BreadCrumb from '../../components/bread-crumb/BreadCrumb.vue'
import CourseDetails from '../../components/courses/course-details/CourseDetails.vue'
import CourseStatus from '../../components/courses/course-status/CourseStatus.vue'
import CourseCategory from '../../components/courses/course-category/CourseCategory.vue'
import CourseImages from '../../components/courses/course-images/CourseImages.vue'
import CourseDetailsAdd from '../../components/courses/course-details/CourseDetailsAdd.vue'
import CourseStatusAdd from '../../components/courses/course-status/CourseStatusAdd.vue'
import CourseCategoryAdd from '../../components/courses/course-category/CourseCategoryAdd.vue'
import CourseImagesAdd from '../../components/courses/course-images/CourseImagesAdd.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
const router = useRouter();
const store = useStore()
const links=[
    {
        id: 1,
        title: 'Student Space',
        link: '',
    },
    {
        id: 2,
        title: 'Courses',
        link: '/course',
    },
]
const newCourse = ref({
  details: {
    title: '',
    image: null,
    description: '',
  },
  category:{
    category:'',
  }
});

async function handleAddCourse() {
  try {
    await store.dispatch('courses/addCourses',
    newCourse.value = {
      title:  newCourse.value.details.title,
      description: newCourse.value.details.description,
      image: newCourse.value.details.image,
      category: newCourse.value.category.category
    });
    router.push('/course');
  } catch (error) {
    console.error('Error adding course:', error);
  }
}
const page = "Course details"
</script>

<template>
  <div class="flex  min-h-screen pb-36 w-full flex-col bg-muted/40">
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <BreadCrumb :links="links" :page="page" /> 
      </header>
      <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
          <div class="flex items-center gap-4">
  <Button variant="outline" size="icon" class="h-7 w-7">
    <ChevronLeft class="h-4 w-4" />
    <span class="sr-only">Back</span>
  </Button>

  <h1 class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
    Add Course
  </h1>

  <div class="ml-auto flex items-center">
    <Button size="sm" class="h-7 gap-1" @click="handleAddCourse">
      <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Add 
      </span>
    </Button>
  </div>
</div>

          <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div class="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <CourseDetailsAdd  v-model="newCourse.details"/>
              <CourseCategoryAdd v-model="newCourse.category"/>
            </div>
            <div class="grid auto-rows-max items-start gap-4 lg:gap-8">
              <CourseStatusAdd/>
              <CourseImagesAdd/>
            </div>
          </div>
          <div class="flex items-center justify-center gap-2 md:hidden">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button size="sm">
              Save Product
            </Button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>