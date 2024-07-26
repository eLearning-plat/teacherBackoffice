<template>
  <div class="container">
    <BreadCrumb :links="links" :page="page" class="mt-2"/>
    <header class="sticky  mt-3 top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
       
        <div class="relative ml-auto flex-1 md:grow-0">
          <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input v-model="searchQuery"
            type="search"
            placeholder="Search..."
            class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <Select v-model="selectedFilter" class="w-full sm:w-auto">
            <SelectTrigger class="w-[180px] border border-gray-300 rounded-md">
              <SelectValue :placeholder="$t('All courses')" />
            </SelectTrigger>
            <SelectContent class="z-10 absolute mt-2 w-[180px] bg-white border border-gray-300 rounded-md">
              <SelectGroup>
            
                <SelectItem value="all-courses">{{ $t('All courses') }}</SelectItem>
                <SelectItem value="Quranic Recitation Tajwid">{{ $t('Quranic Recitation Tajwid') }}</SelectItem>
                <SelectItem value="Sona">{{ $t('Sona') }}</SelectItem>
                <SelectItem value="Arabic Language">{{ $t('Arabic Language') }}</SelectItem>
                <SelectItem value="English Language">{{ $t('English Language') }}</SelectItem>
                <SelectItem value="Computer">{{ $t('Computer') }}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <button
      class="my-2 bg-blue-600 border-2 border-blue-600 shadow-md rounded-md p-2 text-white"
      @click="push()"
    >
      <span class="text-white pi pi-plus"></span>
      {{ $t('Add courses') }}
    </button>
      </header>  
<div >    
      <CardContent class="  border-gray-200  grid grid-cols-1 mt-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <cardCourseTeacher
            v-for="(detail, index) in details"
            :key="index"
            :detail="detail"
            @go-to-details="goToDetails"
          />
        </CardContent>
      <div class="flex justify-end">  <paginaTion/></div>
  </div>   
  </div>
</template>

<script>
import {
  ChevronLeft,
  Search
} from 'lucide-vue-next'
import { mapState, mapActions } from 'vuex';
import Input from '../../components/ui/input/Input.vue';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '../../components/ui/select';
import BreadCrumb from '../../components/bread-crumb/BreadCrumb.vue';
import ModalAddCourses from '@/components/modal/modalAddCourses.vue'
import cardCourseTeacher from '@/components/cards/cardCourseTeacher.vue';
import paginaTion from '@/components/pagination/paginaTion.vue'
import Card from '../../components/ui/card/Card.vue';
import CardContent from '../../components/ui/card/CardContent.vue';
export default {
  name: 'CoursePage',
  components: {
    cardCourseTeacher,
    ModalAddCourses,
    paginaTion,
    Card,
    CardContent, BreadCrumb,
    Input, ChevronLeft,
    Search,
    Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem
  },
  data() {
    return {
      selectedFilter: '',
      isModalOpen: false,
      searchQuery: '',
      page:'Courses',
      links:[
    {
        id: 1,
        title: 'Student Space',
        link: '',
    }],
      details: [
        { title: "Nest", description: "Learn the fundamentals of nest", url: "http://example.com/1" },
        { title: "React", description: "Learn the fundamentals of react", url: "http://example.com/2" },
        { title: "Vue", description: "Learn the fundamentals of vue", url: "http://example.com/3" },
      ]
    };
  },
  methods: {
    ...mapActions('courses', ['fetchCourses']),
    goToDetails(){
    return this.$router.push('/courseDetails');
  },
  push(){
   return this.$router.push('/AddCourse');
  },
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
  created() {
    console.log('Component created');
    this.fetchCourses()
      .then(() => {
        console.log('Courses fetched:', this.courses);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });},
  computed: {
    ...mapState('courses', ['courses']),
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
  outline: none;
  box-shadow: none;
}

.custom-select option {
  background-color: white;
  color: rgb(109, 109, 109);
  /* font-weight: bold; */
}
</style>