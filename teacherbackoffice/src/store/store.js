// store/index.js
import { createStore } from 'vuex';
import courses from './modules/courses';
import meetings from './modules/meetings';
import blogs from './modules/blogs';
import documents from './modules/documents'
export default createStore({
  modules: {
    courses,
    meetings,
    documents,
    blogs
  }
});
