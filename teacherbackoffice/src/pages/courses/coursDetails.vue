<template>
  <div>

  <div class="w-full gap-8 overflow-auto">
   
    <div class="grid gap-4">
      <div class="bg-gray-500 text-white p-4 rounded-md shadow-md">
        <h1 class="text-3xl font-bold">Introduction to Web Development</h1>
        <p class="text-muted-foreground">
          Learn the fundamentals of building modern web applications with HTML,
          CSS, and JavaScript.
        </p>
      </div>
    </div>

    <div
      class="grid gap-6 p-4 border-gray-200 rounded-md border-1 mt-3 shadow-md"
    > 
 <div class="flex justify-end"> 
    <Button
              variant="outline"
              size="sm"
              class="border-2 border-blue-500 px-4 py-2 bg-blue-500  text-white rounded-lg"
              @click="openModal"
            >
            {{ $t('Add courses') }}
            </Button>
            <ModalAddChaptrCourse
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      imageSrc="@/assets/vuex.png"
      title="Add New Course"
      description="Fill in the details to add a new course."
      buttonText="Add Course"
      @add-course="addCourse"
      @close="closeModal"
    />
            </div>
      <div>
        <h2 class="text-xl font-bold text-sky-500">Course</h2>
        <div class="mt-4 grid gap-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <FileIcon class="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <div class="font-bold">HTML Fundamentals</div>
                <p class="text-sm text-muted-foreground">
                  Completed on May 15, 2023
                </p>
             
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              class="border-2   border-blue-500 px-4 py-2 bg-white text-blue-500 rounded-lg" 
               @click="openModal"
            >
              Update
            </Button>
            <ModalUpdateCourse
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      imageSrc="@/assets/vuex.png"
      title="Update Course"
      description="Fill in the details to update a course."
      buttonText="Update Course"
      @add-course="addCourse"
      @close="closeModal"
    />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <FileIcon class="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <div class="font-bold">CSS Fundamentals</div>
                <p class="text-sm text-muted-foreground">
                  Completed on May 22, 2023
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              class="border-2 rounded-lg  border-blue-500 px-4 py-2 text-blue-500"
            >
              Update
            </Button>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <FileIcon class="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <div class="font-bold">JavaScript Fundamentals</div>
                <p class="text-sm text-muted-foreground">Not Updateed</p>
              </div>
            </div>
            <Button
              variant="outline"
              class="border-2   shadow-slate-500 rounded-md border-blue-500 px-4 py-2  text-blue-500"
              size="sm"
            >
              Update
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-xl font-bold text-sky-500">Upcoming Activities</h2>
        <div class="mt-4 grid gap-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <div class="h-5 w-5 text-muted-foreground pi pi-calendar" />
              </div>
              <div>
                <div class="font-bold">JavaScript Project</div>
                <p class="text-sm text-muted-foreground">
                  Due on June 15, 2023
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              class="border-2   shadow-slate-500 rounded-md border-blue-500 px-4 py-2  text-blue-500"
            >
              Update
            </Button>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <div class="h-5 w-5 text-muted-foreground pi pi-calendar" />
              </div>
              <div>
                <div class="font-bold">Midterm Exam</div>
                <p class="text-sm text-muted-foreground">
                  Due on July 31, 2024
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              class="border-2 rounded-md  border-blue-500 px-4 py-2 text-blue-500"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>

  </div></div>
</template>

<script>

import ModalAddChaptrCourse from '@/components/modal/updateChap.vue';
import ModalUpdateCourse from '@/components/modal/updateOneCourse.vue';

import solideSlide from '@/components/carousel/solideSlide.vue';
export default {
  name: "coursDetails",
  components: {
    solideSlide,
    ModalAddChaptrCourse,
    ModalUpdateCourse
  },
  data() {
    return {
      isModalOpen: false,
      details: [
        {
          title: "Detail 1",
          description: "Description 1",
          url: "http://example.com/1",
        },
        {
          title: "Detail 2",
          description: "Description 2",
          url: "http://example.com/2",
        },
        {
          title: "Detail 3",
          description: "Description 3",
          url: "http://example.com/3",
        },
      ],
      items:[
        { label: "Courses" },
        { label: "Course Details" },
      
      ],
      home: {
        icon: "pi pi-home",
        to: "/"
      }
      
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    addCourse() {
      // Logic to add course
      this.closeModal();
    }
  }
};
</script>


<style scoped>
.progress {
  width: 65%;
}

.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
