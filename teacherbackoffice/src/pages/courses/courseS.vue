<template>
  <div class="container">
    <BreadCrumb :links="links" :page="page" class="mt-2"/>
    <CoursesHeader
      :search-query.sync="searchQuery"
      :selected-filter.sync="selectedFilter"
    />
    <div>
      <CardContent class="border-gray-200 grid grid-cols-1 mt-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <cardCourseTeacher
          v-for="(detail, index) in filteredDetails"
          :key="index"
          :detail="detail"
          @go-to-details="goToDetails"
          @deleteCourse="deleteCourse"
        />
      </CardContent>
      <div class="flex justify-end">
        <paginaTion />
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';
import BreadCrumb from '../../components/bread-crumb/BreadCrumb.vue';
import cardCourseTeacher from '@/components/cards/cardCourseTeacher.vue';
import paginaTion from '@/components/pagination/paginaTion.vue';
import CardContent from '../../components/ui/card/CardContent.vue';
import CoursesHeader from '../../components/courses/courses-toolbar/CoursesHeader.vue';
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: 'CoursePage',
  components: {
    cardCourseTeacher,
    CoursesHeader,
    paginaTion,
    CardContent,
    BreadCrumb,
  },
  data() {
    return {
      searchQuery: '',
      selectedFilter: '',
      page: 'Courses',
      links: [
        {
          id: 1,
          title: 'Teacher Space',
          link: '',
        }
      ]
    };
  },
  setup() {
    const { getAccessTokenSilently } = useAuth0();
    return { getAccessTokenSilently };
  },
  methods: {
    ...mapActions('courses', ['fetchCourses', 'deleteCourses']),
    goToDetails() {
      this.$router.push('/courseDetails');
    },
    async deleteCourse(courseId) {
      try {
        const token = await this.getAccessTokenSilently(); 
        await this.deleteCourses(courseId, token);
        await this.fetchCourses(token); 
        console.log('Course deleted successfully');
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  },
  async created() {
    try {
      const token = await this.getAccessTokenSilently(); 
      await this.fetchCourses(token); 
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  },
  computed: {
    ...mapState('courses', ['courses']),
    filteredDetails() {
      const query = this.searchQuery.toLowerCase();
      console.log('Filtering with query:', query, 'and filter:', this.selectedFilter);
      return this.courses.filter(course => {
        const matchesSearchQuery = course.title.toLowerCase().includes(query);
        const matchesFilter = this.selectedFilter === '' || course.category === this.selectedFilter;
        return matchesSearchQuery && matchesFilter;
      });
    },
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
  
}
</style>