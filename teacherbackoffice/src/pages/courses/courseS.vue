<template>
  <div>
    <div class="border-2 border-gray-200 shadow-md p-4 mb-2 rounded-md">
  <div class="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
    <select v-model="selectedFilter" class="text-blue-500 border-2 border-blue-500 rounded p-2 w-full sm:w-auto custom-select">
      <option value="" class="text-blue-500">{{ $t('All courses') }}</option>
      <option value="Quranic Recitation Tajwid" class="text-blue-500">{{ $t('Quranic Recitation Tajwid') }}</option>
      <option value="Sona" class="text-blue-500">{{ $t('Sona') }}</option>
      <option value="Arabic Language" class="text-blue-500">{{ $t('Arabic Language') }}</option>
      <option value="English Language" class="text-blue-500">{{ $t('English Language') }}</option>
      <option value="Computer" class="text-blue-500">{{ $t('Computer') }}</option>
    </select>
    <input
      v-model="searchQuery"
      type="search"
      placeholder="Search"
      class="border-2 border-blue-500 rounded p-2 w-full sm:w-auto text-blue-500 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>

<div class="shadow-md mt-3">
    

    <div class="border-2 shadow-md rounded-md p-3">
      <button
      class="my-2 bg-blue-600 border-2 border-blue-600 shadow-md rounded-md p-2 text-white"
      @click="openModal"
    >
      <span class="text-white pi pi-plus"></span>
      {{ $t('Add courses') }}
    </button>

    <ModalAddCourses
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      imageSrc="@/assets/vuex.png"
      title="Add New Course"
      description="Fill in the details to add a new course."
      buttonText="Add Course"
      @add-course="addCourse"
      @close="closeModal"
    />
    
    <div
      class="  border-gray-200  grid grid-cols-1 mt-2 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <cardCours
        v-for="(detail, index) in details"
        :key="index"
        :detail="detail"
        :details="goToDetails"
      />
    </div>
    <paginaTion/>
  </div>
  </div>
  </div>
</template>

<script>

import ModalAddCourses from '@/components/modal/modalAddCourses.vue'
import CardCours from '@/components/cards/cardCours.vue'
export default {
  name: 'CoursePage',
  components: {
    CardCours,
    ModalAddCourses
  },
  data() {
    return {
      selectedFilter: '',
      isModalOpen: false,
      searchQuery: '',
      details: [
        { title: "Detail 1", description: "Description 1", url: "http://example.com/1" },
        { title: "Detail 2", description: "Description 2", url: "http://example.com/2" },
        { title: "Detail 3", description: "Description 3", url: "http://example.com/3" },
      ]
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
  },
  computed: {
    filteredItems() {
      const query = this.searchQuery.toLowerCase();
      return this.details.filter(item => 
        item.title.toLowerCase().includes(query) &&
        (this.selectedFilter === '' || item.category === this.selectedFilter)
      );
    }
  }
};
</script>
<style scoped>
.custom-select {

  background-color: white;
  color: blue;
  font-weight: bold;
  border: 2px solid blue;
  outline: none;
  box-shadow: none;
}

.custom-select option {
  background-color: white;
  color: blue;
  font-weight: bold;
}
</style>