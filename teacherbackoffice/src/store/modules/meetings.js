import axios from 'axios';

const state = {
  meetings: []
};

const mutations = {

  SET_MEETINGS(state, meetings) {
    state.meetings = meetings;
  },
  ADD_MEETING(state, meeting) {
    state.meetings.push(meeting);
  },
  UPDATE_MEETING(state, updatedMeeting) {
    const index = state.meetings.findIndex(meeting => meeting.id === updatedMeeting.id);
    if (index !== -1) {
      state.meetings.splice(index, 1, updatedMeeting);
    }
  },
  DELETE_MEETING(state, meetingId) {
    state.meetings = state.meetings.filter(meeting => meeting.id !== meetingId);
  },
  
};

const actions = {
  async fetchMeetings({ commit }, query = {}) {
    return await axios.get('http://localhost:3000/api/meetings', { params: query })
      .then(async (response) => {
        const transformedMeetings = response.data.map(meeting => {
          return {
            ...meeting,
            start: meeting.date,
            end: meeting.endDate,
            url: meeting.url,
            title: meeting.title || 'Default Title',
            extendedProps: {
              description: meeting.description || 'No description provided'
            }
          };
        });
  
        await commit('SET_MEETINGS', transformedMeetings);
      })
      .catch(error => {
        console.error('There was an error fetching the meetings:', error);
      });
  },  
//  async fetchMeetings({ commit }) {
  
//     return await axios.get('http://localhost:3000/api/meetings')
//       .then(async(response) => {
        
//         const transformedMeetings = response.data.map(meeting => {
//           return {
//             ...meeting,
//             start: meeting.date, 
//             end: meeting.endDate,
//             url: meeting.url,
//             title: meeting.title || 'Default Title',
//             extendedProps: {
//               description: meeting.description || 'No description provided'
//             }
//           };
//         });

//        await commit('SET_MEETINGS', transformedMeetings);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the meetings:', error);
//       });
//   },
  async addMeeting({ dispatch }, newEvent) {
    try {
      console.log("new meeting ", newEvent)
      const res = await axios.post('http://localhost:3000/api/meetings', newEvent);
     
      await dispatch('fetchMeetings'); 
      return res.data
    } catch (error) {
      console.error('Error adding meeting:', error);
      throw error; 
    }
  },

  async updateMeeting({ commit }, { id, updatedData }) {
    
      try{
      await axios.put(`http://localhost:3000/api/meetings/${id}`, updatedData)
        commit('UPDATE_MEETING', updatedMeeting);
      }
      catch(error){
    
      };
  },
 async deleteMeeting({ commit , dispatch}, meetingId) {
    return await axios.delete(`http://localhost:3000/api/meetings/${meetingId}`)

      .then(async() => {
        await dispatch('fetchMeetings'); 
        commit('DELETE_MEETING', meetingId);
      })
      .catch(error => {
        console.error('There was an error deleting the meeting:', error);
      });
  }
};

const getters = {
  allMeetings: state => state.meetings
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
