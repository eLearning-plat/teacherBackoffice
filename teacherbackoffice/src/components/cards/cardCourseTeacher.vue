<template>
  <Card className="w-full max-w-md ">
    <Card class="">
      <CardContent class="px-0">
  <CardContent class="relative px-0">
    
    <div class="grid-container">
      <div class="image-container">
        <img
          :src="detail.image"
          alt="Course"
          width="300"
          height="200"
          class="image"
        />
  
      </div>
      <div class="overlay rounded-t-md">
     
        <small class="text-sm leading-none">{{ detail.description }}</small>
        <div class="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          <span>2h 30m</span>
          <Star className="w-4 h-4" />
          <span>Beginner</span>
          <List className="w-4 h-4" />
          <span>10 lessons</span>
        </div>
       
      </div>
    </div> 
    
    </CardContent>
    
  <h1 class="font-bold mx-2">{{ detail.title }}</h1>
  
  <div class="flex gap-2 mt-2 mx-2">
    <Button size="sm" class="bg-blue-500 text-white rounded-md px-2 py-1" @click="push(detail._id)">Details</Button>
    <Button size="sm" variant="outline" class="border px-2 py-1  rounded"  @click="deleteCourse">
      Delete
    </Button>
  </div>
  </CardContent>  </Card>
  </Card>
</template>

<script>
import { List, Clock, Star } from 'lucide-vue-next';
import CardContent from '@/components/ui/card/CardContent.vue'
import Card from '@/components/ui/card/Card.vue'
import CardFooter from '@/components/ui/card/CardFooter.vue'


export default {
  name: 'cardCourseTeacher',
  components: {
    List,
    Clock,
    Star,
    CardContent,
    Card,
    CardFooter
  },
  props: {
    detail: {
      type: Object,
      required: true,
    },
    
  },
  setup() { 
  return {
        login: () => {
          loginWithRedirect();
        },
        
      };
    },
  methods: {
    push(courseId){
      console.log(courseId)
      this.$router.push(`/courseDetails/${courseId}`);
      
    },
    goToDetails() {
      this.$emit(this.go-to-details);
    },
    deleteCourse() {
      this.$emit('deleteCourse', this.detail._id);
    }
  },

};

</script>
<style scoped>
.relative {
  position: relative;
}

.grid-container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
}

.image-container {
  position: relative;
}

.image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.title {
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: center;
  margin: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.relative:hover .overlay {
  opacity: 0.9;
}
</style>