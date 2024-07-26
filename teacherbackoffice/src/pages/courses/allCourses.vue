<template>
    <div>
      <div>fgh</div>
      <cardCourseTeacher :detail="details"/>
    </div>
</template>
<script>
export default {
    name:'allCourses',
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
}
</script>