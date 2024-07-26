<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg w-2/4 p-6 relative">
      <button @click="closeModal" class="absolute font-bold  right-6 text-gray-600 hover:text-gray-900">
        &times;
      </button>

      <div class="mb-2">
        <h2 class="text-xl font-semibold text-blue-600">{{ title }}</h2>
      </div>
      
      <div class="">
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
            <select v-model="selectedFilter" class="text-gray-400 w-full border-2 border-gray-400 rounded p-2 custom-select">
      <option value="Quranic Recitation Tajwid" >{{ $t('Quranic Recitation Tajwid') }}</option>
      <option value="Sona" >{{ $t('Sona') }}</option>
      <option value="Arabic Language">{{ $t('Arabic Language') }}</option>
      <option value="English Language">{{ $t('English Language') }}</option>
      <option value="Computer">{{ $t('Computer') }}</option>
    </select>
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
              multiple
              @change="handleFileChange"
              class="border-2 border-gray-400 text-gray-400 rounded-md p-2 w-full"
            />
          </div>
          <!-- <div class="border-2 border-gray-600 bg-gray-50 rounded-md p-3 max-h-100 overflow-y-auto">
    <div v-for="(item, index) in items" :key="index" class="my-2 flex items-center">
      <input
        type="date"
        v-model="item.date"
        placeholder="01/05/2024"
        class="w-1/3 mr-2 border-2 border-gray-700 rounded-md"
      />
      <input
        type="url"
        v-model="item.url"
        placeholder="http://aaaaa"
        class="w-2/3 ml-2 border-2 border-gray-700 rounded-md"
      />
      <div class="flex items-center">
        <button
          @click="addInput"
          type="button"
          class="mx-1 border-2 border-black bg-white text-black-600 rounded-full px-2 py-1 pi pi-plus"
        >
          
        </button>
        <button
          @click="removeInput(index)"
          type="button"
          class="mx-1 border-2 border-black bg-white text-black-600 rounded-full px-2 py-1 pi pi-minus"
        >
        
        </button>
      </div>
    </div>
  </div> -->
  <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mt-3">
  <button
    type="submit"
    class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
  >
    {{ buttonText }}
  </button>
  <button
    @click="closeModal()"
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
  name: 'ModalAddCourses',
  props: {
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
      default: 'Add Course'
    }
  },
  data() {
    return {
      courseTitle: '',
      courseDescription: '',
      additionalCourses: '',
      files: [],
      items: [{ date: '', url: '' }] // Liste d'inputs initiale
    };
  },
  methods: {
    handleFileChange(event) {
      this.files = Array.from(event.target.files);
    },
    handleSubmit() {
      const additionalCoursesArray = this.additionalCourses
        .split('\n')
        .filter(course => course.trim() !== '');

      this.$emit('add-course', {
        title: this.courseTitle,
        description: this.courseDescription,
        additionalCourses: additionalCoursesArray,
        files: this.files
      });
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    },
    addInput() {
      this.items.push({ date: '', url: '' }); // Ajouter un nouvel objet d'inputs
    },
    removeInput(index) {
      // S'assurer qu'il reste au moins un ensemble d'inputs
      if (this.items.length > 1) {
        this.items.splice(index, 1); // Supprimer l'objet d'inputs à l'index spécifié
      }
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
/* .custom-select {

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
} */
</style>
