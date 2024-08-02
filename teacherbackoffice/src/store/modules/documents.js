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
  fetchDocuments({ commit }, queryParams={}) {
    console.log('param ',queryParams )
    return axios.get('http://localhost:3000/api/documents',{params:queryParams})
   
      .then(response => {
        console.log('response', response.data)
        commit('SET_DOCUMENTS', response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the documents:', error);
      });
  },
  async addDocument({ dispatch }, { newDocument, categoryID,courseID }) {
    try {
      console.log('newDocument', newDocument);
      const res = await axios.post('http://localhost:3000/api/documents', newDocument, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log('res.data', res.data);
      console.log('categoryID', categoryID);
      console.log('categoryID', courseID);
      await dispatch('fetchDocuments', { categoryID,courseID });
      return res.data;
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
