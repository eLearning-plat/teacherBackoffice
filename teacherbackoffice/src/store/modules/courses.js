// store/modules/courses.js
import axios from 'axios';

const state = {
  courses: []
};

const mutations = {
  SET_COURSES(state, courses) {
    state.courses = courses;
  },
  ADD_COURSES(state, courses) {
    state.courses.push(courses);
  },
  UPDATE_COURSES(state, updatedcourses) {
    const index = state.courses.findIndex(course => course.id === updatedcourses.id);
    if (index !== -1) {
      state.courses.splice(index, 1, updatedcourses);
    }
  },
  DELETE_COURSES(state, courseId) {
    state.courses = state.courses.filter(course => course.id !== courseId);
  }
};

const actions = {
  fetchCourses({ commit }) {
    return axios.get('http://localhost:3000/api/courses')
      .then(response => {
        commit('SET_COURSES', response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses:', error);
      });
  },
  async getCourseById({ state }, courseId) {
    try {
      const course = state.courses.find(course => course.id === courseId);
      if (course) {
        return course;
      }

      const response = await axios.get(`http://localhost:3000/api/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course by ID:', error);
      throw error;
    }
  },
  async addCourses({ dispatch }, newCourse) {
    try {
      console.log('newCourse', newCourse)
      const res = await axios.post('http://localhost:3000/api/courses', newCourse, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
     console.log('res.data', res.data)
      await dispatch('fetchCourses'); 
 
      return res.data
    } catch (error) {
      console.error('Error adding course:', error);
      throw error; 
    }
  },

  async updateCourses({ commit }, { id, updatedData }) {
    
      try{
      await axios.put(`http://localhost:3000/api/courses/${id}`, updatedData)
        commit('UPDATE_COURSES', updatedcourses);
      }
      catch(error){
    
      };
  },
 async deleteCourses({ commit , dispatch}, courseId) {
    return await axios.delete(`http://localhost:3000/api/courses/${courseId}`)

      .then(async() => {
        await dispatch('fetchCourses'); 
        commit('DELETE_COURSES', courseId);
      })
      .catch(error => {
        console.error('There was an error deleting the courses:', error);
      });
  }
};

const getters = {
  allCourses: state => state.courses,
  getCourseById: (state) => (id) => {
    return state.courses.find(course => course.id === id);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
