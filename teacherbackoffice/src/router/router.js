
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: "/blogs",  name:'blogPage', component:()=>import('../pages/blog/blogPage.vue')},
  
  { path: "/examples/forms", name: "Example", component: () => import('../pages/profile/forms/Example.vue')  },
  
      {
        path: '/examples/forms/account',
        name: 'Account',
        component: ()=> import('../pages/profile/forms/Account.vue'),
      },
      {
        path: '/examples/forms/appearance',
        name: 'Appearance',
        component: ()=> import('../pages/profile/forms/Appearance.vue'),
      },
      {
        path: '/examples/forms/notifications',
        name: 'Notifications',
        component: ()=> import('../pages/profile/forms/Notifications.vue'),
      },
      {
        path: '/examples/forms/display',
        name: 'Display',
        component: ()=> import('../pages/profile/forms/Display.vue'),
      },
      {
        path: '/document/Quranic',
        name: 'QuranicPage',
        component: ()=> import('../pages/document/QuranicPage.vue'),
      },
      {
        path: '/document/Sona',
        name: 'SonaPage',
        component: ()=> import('../pages/document/SonaPage.vue'),
      },
      {
        path: '/document/ArabicLanguage',
        name: 'ArabicLanguagePage',
        component: ()=> import('../pages/document/ArabicLanguagePage.vue'),
      },
      {
        path: '/document/EnglishLanguage',
        name: 'EnglishLanguagePage',
        component: ()=> import('../pages/document/EnglishLanguagePage.vue'),
      },
      {
        path: '/document/Computer',
        name: 'ComputerPage',
        component: ()=> import('../pages/document/ComputerPage.vue'),
      },
  { path: "/course", name: 'coursePage', component: () => import('../pages/courses/courseS.vue') },
  { path: "/allCourses", name: 'allCourses', component: () => import('../pages/courses/allCourses.vue') },
 
  {path:"/", name:'dashBord', component:()=>import('../pages/dashbord/dashBord.vue')},
  { path: "/event", name: 'eventPage', component: () => import('../pages/events/eventPage.vue') },
  { path: "/document", name: 'documentPage', component: () => import('../pages/document/documentPage.vue') },
  { path: "/profile", name: "profilePage", component: () => import('../pages/profile/profilePage.vue') },
  { path: "/courseDetails/:id", name: "CourseDetails", component: () => import('../pages/courses/CourseDetails.vue') },
  { path: "/AddCourse", name: "AddCourse", component: () => import('../pages/courses/AddCourse.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

