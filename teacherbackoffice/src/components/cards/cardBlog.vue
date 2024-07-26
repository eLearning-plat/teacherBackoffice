<template>
    <div class="grid gap-8">
          <div class="flex flex-col md:flex-row gap-4 bg-background p-4 rounded-lg shadow border-2 border-gray-200">
            <img
              src="@/assets/vuex.png"
              alt="Blog post cover"
              width="300"
              height="200"
              class="rounded-lg object-cover md:w-[300px] md:h-[200px] w-full h-auto"
            />
            <div class="flex-1 grid gap-2">
              <h2 class="text-2xl font-bold text-gray-500">
                Mastering React: A Comprehensive Guide
              </h2>
              <div class="text-gray-400 text-sm flex flex-wrap items-center">
                <span>Jane Smith</span>
                <span class="mx-2">•</span>
                <span>May 15, 2023</span>
              </div>
              <p class="text-gray-700">
                Dive deep into the world of React, the popular JavaScript
                library for building user interfaces. From beginner concepts to
                advanced techniques, this guide will help you become a React
                master.
              </p>
              <div class="flex items-center gap-4">
                <div class="text-gray-400 text-sm flex items-center gap-2">
                  <span class="flex items-center text-red-400">
                    <i class="pi pi-heart"></i>
                    15 likes
                  </span>
                  <span class="mx-2 text-gray-500">•</span>
                  <a
                    href="#"
                    class="text-primary hover:underline flex items-center"
                    @click.prevent="openModal"
                  >
                    <i class="pi pi-comments mr-1"></i>
                    Comment
                  </a>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <textarea
                  placeholder="Add a comment..."
                  class="flex-1 border-2 border-gray-400 p-2 pl-10 text-sm rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-none"
                ></textarea>
                <button class="my-2 bg-blue-600 border-2 border-blue-600 shadow-md rounded-md p-2 text-white flex items-center">
                  <i class="pi pi-send mr-1"></i>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
export default {
    name:'cardBlog',
    props: {
    detail: {
      type: Object,
      required: true
    },
    details: {
      type: Function,
      required: true
    }
  }, 
}
</script>