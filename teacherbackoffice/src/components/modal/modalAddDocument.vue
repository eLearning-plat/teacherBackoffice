<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg w-2/4 p-6 relative">
      <button @click="closeModal" class="absolute font-bold right-6 text-gray-600 hover:text-gray-900">
        &times;
      </button>

      <div class="mb-2">
        <h2 class="text-xl font-semibold text-blue-600">{{ title }}</h2>
      </div>
      
      <div>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <input
              v-model="courseTitle"
              type="text"
              placeholder="Course Title"
              class="w-full border-2 border-gray-400 text-gray-400 rounded-md p-2"
            />
          </div>
         
          <div class="mb-4">
            <textarea
              v-model="courseDescription"
              placeholder="Course Description"
              class="w-full border-2 text-gray-400 border-gray-400 rounded-md p-2"
            ></textarea>
          </div>
          
          
          <div class="mb-4">
            <input
              type="file"
              @change="handleFileChange"
              class="border-2 border-gray-400 text-gray-400 rounded-md p-2 w-full"
            />
          </div>
  
          <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mt-3">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
            >
              {{ buttonText }}
            </button>
            <button
              @click="closeModal"
              type="button"
              class="px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Remove
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModalAddDocument',
  props: {
    category: {
      type: String,
      required: true,
    },
    coursId: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Add Document'
    }
  },
  data() {
    return {
      courseTitle: '',
      courseDescription: '',
      categoryID: this.category,
      courseID:this.coursId ||'1',
      userID: '1',
      file: null
    };
  },
  methods: {
    handleFileChange(event) {
      if (event.target.files.length > 0) {
        this.file = event.target.files[0];
      } else {
        this.file = null;
      }
    },
    handleSubmit() {
    const formData = new FormData();
    formData.append('title', this.courseTitle);
    formData.append('description', this.courseDescription);
    formData.append('categoryID', this.categoryID);
    formData.append('courseID', this.courseID);
    formData.append('userID', this.userID);
    if (this.file) {
      formData.append('file', this.file);
    }
console.log("courseId", this.courseID)
    this.$emit('add-document', { newDocument: formData, categoryID: this.categoryID, courseID: this.courseID });
    this.closeModal();
  },
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>



<style scoped>
.pi.pi-plus::before {
  content: '+';
}

.pi.pi-minus::before {
  content: '-';
}

.max-h-100 {
  max-height: 100px;
}

</style>
