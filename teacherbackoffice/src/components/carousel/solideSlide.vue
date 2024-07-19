<template>
    <div>
     
       <Splide
          :options="{ perPage: 2, gap: '1rem', arrows: true }"
         
        >
        
          <SplideSlide v-for="(detail, index) in details" :key="index">
            <div class="container mx-auto grid grid-cols-1">
              <cardCours :detail="detail" />
            </div>
          </SplideSlide>
        </Splide>
    </div>
</template>
<script>
import cardCours from "../cards/cardCours.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "solideSlide",
  components: {
    cardCours,
    Splide,
    SplideSlide,
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
    };
  },
};
</script>

<style scoped>

.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>