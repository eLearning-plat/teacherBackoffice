// store/modules/blogs.js
import axios from 'axios';
const apiUrl = import.meta.env.VITE_APP_API_URL;
const state = {
  blogs: []
};

const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
  ADD_BLOGS(state, blogs) {
    state.blogs.push(blogs);
  },
  UPDATE_BLOGS(state, updatedblogs) {
    const index = state.blogs.findIndex(blog => blog.id === updatedblogs.id);
    if (index !== -1) {
      state.blogs.splice(index, 1, updatedblogs);
    }
  },
  DELETE_BLOGS(state, blogId) {
    state.blogs = state.blogs.filter(blog => blog.id !== blogId);
  }
};

const actions = {
  fetchBlogs({ commit }) {
    return axios.get(`${apiUrl}/blogs`)
      .then(response => {
        commit('SET_BLOGS', response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs:', error);
      });
  },
  async addBlogs({ dispatch }, bnewBlogs) {
    try {
      console.log('bnewBlogs', bnewBlogs)
      const res = await axios.post(`${apiUrl}/blogs`, bnewBlogs, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
     console.log('res.data', res.data)
      await dispatch('fetchBlogs'); 
 
      return res.data
    } catch (error) {
      console.error('Error adding blog:', error);
      throw error; 
    }
  },

  async updateBlogs({ commit }, { id, updatedData }) {
    
      try{
      await axios.put(`${apiUrl}/blogs/${id}`, updatedData)
        commit('UPDATE_BLOGS', updatedblogs);
      }
      catch(error){
    
      };
  },
 async deleteblogs({ commit , dispatch}, blogId) {
    return await axios.delete(`${apiUrl}/blogs/${blogId}`)

      .then(async() => {
        await dispatch('fetchBlogs'); 
        commit('DELETE_BLOGS', blogId);
      })
      .catch(error => {
        console.error('There was an error deleting the blogs:', error);
      });
  }
};

const getters = {
  allBlogs: state => state.blogs
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
