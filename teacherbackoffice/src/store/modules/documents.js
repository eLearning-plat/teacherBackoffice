// store/modules/documents.js
import axios from 'axios';

const state = {
  documents: []
};

const mutations = {
  SET_DOCUMENTS(state, documents) {
    state.documents = documents;
  },
  ADD_DOCUMENTS(state, documents) {
    state.documents.push(documents);
  },
  UPDATE_DOCUMENTS(state, updatedDocuments) {
    const index = state.documents.findIndex(document => document.id === updatedDocuments.id);
    if (index !== -1) {
      state.documents.splice(index, 1, updatedDocuments);
    }
  },
  DELETE_DOCUMENTS(state, documentId) {
    state.documents = state.documents.filter(document => document.id !== documentId);
  }
};

const actions = {
  fetchDocuments({ commit }) {
    return axios.get('http://localhost:3000/api/documents')
      .then(response => {
        commit('SET_DOCUMENTS', response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the documents:', error);
      });
  },
  async adddocuments({ dispatch }, newdocuments) {
    try {
      console.log('newdocuments', newdocuments)
      const res = await axios.post('http://localhost:3000/api/documents', newdocuments, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
     console.log('res.data', res.data)
      await dispatch('fetchDocuments'); 
 
      return res.data
    } catch (error) {
      console.error('Error adding document:', error);
      throw error; 
    }
  },

  async updatedocuments({ commit }, { id, updatedData }) {
    
      try{
      await axios.put(`http://localhost:3000/api/documents/${id}`, updatedData)
        commit('UPDATE_DOCUMENTS', updatedDocuments);
      }
      catch(error){
    
      };
  },
 async deletedocuments({ commit , dispatch}, documentId) {
    return await axios.delete(`http://localhost:3000/api/documents/${documentId}`)

      .then(async() => {
        await dispatch('fetchDocuments'); 
        commit('DELETE_DOCUMENTS', documentId);
      })
      .catch(error => {
        console.error('There was an error deleting the documents:', error);
      });
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
