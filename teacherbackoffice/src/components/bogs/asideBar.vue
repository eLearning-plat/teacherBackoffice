<template>
         <aside class="bg-background p-3 h-full rounded-lg shadow">
        <div class="mb-6">
          <button
     class="my-2 bg-blue-600 border-2 border-blue-600 shadow-md rounded-md p-2 w-full text-white"
     @click="push()"
   >
     <span class="text-white pi pi-plus"></span>
     Add Blog
   </button>
          <!-- <h3 class="text-xl font-bold mb-2 text-blue-500">Search</h3> -->
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <SearchIcon class="w-5 h-5 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Search blog posts..."

              class="block w-full border-2 border-gray-400 p-2 pl-10 text-sm rounded  placeholder-gray-400 focus:outline-none focus:ring-2 shadow-none focus:ring-gray-400"
            />
          </div>
        </div>
        <div>
          <div class="text-xl font-bold mb-2 text-blue-500">Categories</div>
          <ul class=" p-0 space-y-1">
      <li v-for="category in categories" :key="category.label">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            :value="category.value"
            class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300"
          />
          <span class="text-gray-500  no-underline hover:text-foreground">
            {{ $t(category.label) }}
          </span>
        </label>
      </li>
    </ul>
        </div>
      </aside>
</template>
<script>
import Button from '../ui/button/Button.vue'

export default {
    name:"asideBar",
    data() {
    return {
      categories: [
        { label: "Quranic Recitation Tajwid", value: "quranic_recitation_tajwid" },
        { label: "Sona", value: "sona" },
        { label: "Arabic Language", value: "arabic_language" },
        { label: "English Language", value: "english_language" },
        { label: "Computer", value: "computer" },
      ],
    };
  },
};
</script>

<style scoped>
.form-checkbox {
  accent-color: gray;
}
</style>