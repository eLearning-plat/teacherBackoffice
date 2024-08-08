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
  fetchBlogs({ commit }, token) {
    console.log('token', token)
    return axios.get(`${apiUrl}/blogs`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      commit('SET_BLOGS', response.data);
      console.log(reponse.data)
    })
    .catch(error => {
      console.error('There was an error fetching the blogs:', error);
    });
  },
  
  async addBlogs({ dispatch }, {bnewBlogs,token}) {
    try {
      console.log('bnewBlogs', bnewBlogs)
      const res = await axios.post(`${apiUrl}/blogs`, bnewBlogs, {
        headers: {
            Authorization: `Bearer ${token}`,
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

  async updateBlogs({ commit }, { id, updatedData, token }) {
    try {
      const response = await axios.put(`${apiUrl}/blogs/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      commit('UPDATE_BLOGS', response.data);
    } catch (error) {
      console.error('There was an error updating the blog:', error);
    }
  },
  
  async deleteblogs({ commit, dispatch }, { token, blogId }) {
    return await axios.delete(`${apiUrl}/blogs/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(async () => {
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
