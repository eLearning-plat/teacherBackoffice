// store/modules/courses.js
import axios from 'axios';

const state = {
  courses: []
};

const mutations = {
  SET_COURSES(state, courses) {
    state.courses = courses;
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
  }
};

const getters = {
  allCourses: state => state.courses
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
