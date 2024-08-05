// store/modules/courses.js
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-vue';
const apiUrl = import.meta.env.VITE_APP_API_URL;
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
  async fetchCourses({ commit }) {
    const { getAccessTokenSilently } = useAuth0();
    try {
      const token = await getAccessTokenSilently();
      console.log('token', token);
  
      const response = await axios.get(`${apiUrl}/courses`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      commit('SET_COURSES', response.data);
    } catch (error) {
      console.error('There was an error fetching the courses:', error);
    }
  },
  
  async  getCourseById({ state }, courseId) {
    const { getAccessTokenSilently } = useAuth0();

    try {
      const course = state.courses.find(course => course.id === courseId);
      if (course) {
        return course;
      }
  
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${apiUrl}/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching course by ID:', error);
      throw error;
    }
  },
  
  async addCourses({ dispatch }, newCourse) {
    const { getAccessTokenSilently } = useAuth0();

    try {
      const token = await getAccessTokenSilently();
      console.log('newCourse', newCourse);
  
      const res = await axios.post(`${apiUrl}/courses`, newCourse, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log('res.data', res.data);
      await dispatch('fetchCourses'); 
  
      return res.data;
    } catch (error) {
      console.error('Error adding course:', error);
      throw error;
    }
  },
  
  async updateCourses({ commit }, { id, updatedData }) {
    const { getAccessTokenSilently } = useAuth0();

    try {
      const token = await getAccessTokenSilently();
      await axios.put(`${apiUrl}/courses/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      commit('UPDATE_COURSES', { id, updatedData });
    } catch (error) {
      console.error('Error updating course:', error);
      throw error;
    }
  },
  
  async deleteCourses({ commit, dispatch }, courseId) {
    const { getAccessTokenSilently } = useAuth0();

    try {
      const token = await getAccessTokenSilently();
      await axios.delete(`${apiUrl}/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      await dispatch('fetchCourses');
      commit('DELETE_COURSES', courseId);
    } catch (error) {
      console.error('There was an error deleting the course:', error);
      throw error;
    }
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
