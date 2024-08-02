import axios from 'axios';

const apiUrl = import.meta.env.VITE_APP_API_URL;
console.log('API URL:', apiUrl);

const state = {
  documents: []
};

const mutations = {
  SET_DOCUMENTS(state, documents) {
    state.documents = documents;
  },
  ADD_DOCUMENT(state, document) {
    state.documents.push(document);
  },
  UPDATE_DOCUMENT(state, updatedDocument) {
    const index = state.documents.findIndex(document => document.id === updatedDocument.id);
    if (index !== -1) {
      state.documents.splice(index, 1, updatedDocument);
    }
  },
  DELETE_DOCUMENT(state, documentId) {
    state.documents = state.documents.filter(document => document.id !== documentId);
  }
};

const actions = {
  fetchDocuments({ commit }, queryParams = {}) {
    console.log('param', queryParams);
    return axios.get(`${apiUrl}/documents`, { params: queryParams })
      .then(response => {
        console.log('response', response.data);
        commit('SET_DOCUMENTS', response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the documents:', error);
      });
  },
  async addDocument({ dispatch }, { newDocument, categoryID, courseID }) {
    try {
      console.log('newDocument', newDocument);
      const res = await axios.post(`${apiUrl}/documents`, newDocument, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('res.data', res.data);
      console.log('categoryID', categoryID);
      console.log('courseID', courseID);
      await dispatch('fetchDocuments', { categoryID, courseID });
      return res.data;
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  },
  async updatedocuments({ commit }, { id, updatedData }) {
    try {
      const response = await axios.put(`${apiUrl}/documents/${id}`, updatedData);
      commit('UPDATE_DOCUMENT', response.data);
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  },
  async deletedocuments({ commit, dispatch }, documentId) {
    try {
      await axios.delete(`${apiUrl}/documents/${documentId}`);
      await dispatch('fetchDocuments');
      commit('DELETE_DOCUMENT', documentId);
    } catch (error) {
      console.error('There was an error deleting the documents:', error);
    }
  }
};

const getters = {
  allDocuments: state => state.documents
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};


