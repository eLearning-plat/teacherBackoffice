<template>
  <div>
 <Breadcrumb :home="home" :model="items" class="mb-2" />
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
      <div>
        <h2 class="text-xl font-bold text-sky-500">Course Materials</h2>
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
              class="border-2 pi pi-lock-open border-blue-500 px-4 py-2 bg-white text-blue-500 rounded-lg"
            >
              Review
            </Button>
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
              class="border-2 rounded-lg pi pi-eye border-blue-500 px-4 py-2 text-blue-500"
            >
              Review
            </Button>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="rounded-md bg-muted p-2">
                <FileIcon class="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <div class="font-bold">JavaScript Fundamentals</div>
                <p class="text-sm text-muted-foreground">Not started</p>
              </div>
            </div>
            <Button
              variant="outline"
              class="border-2  pi pi-eye-slash shadow-slate-500 rounded-md border-green-500 px-4 py-2  text-green-500"
              size="sm"
            >
              Start
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
              class="border-2 pi pi-lock-open shadow-slate-500 rounded-md border-green-500 px-4 py-2  text-green-500"
            >
              View
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
              class="border-2 rounded-md pi pi-lock border-gray-500 px-4 py-2 text-gray"
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div  class=" mt-3 p-4 rounded-md border-2 shadow-md grid gap-6">
      <h2 class="text-xl text-sky-500 font-bold my-4" >Suggested Courses</h2>
  
     <solideSlide/>
      

    </div>
  </div></div>
</template>

<script>
import Breadcrumb from "primevue/breadcrumb";
import solideSlide from '@/components/carousel/solideSlide.vue';
export default {
  name: "coursDetails",
  components: {
    solideSlide,
    Breadcrumb,
  },
  data() {
    return {
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
