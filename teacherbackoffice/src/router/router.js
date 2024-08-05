
import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from "@auth0/auth0-vue";

const routes = [
  { path: "/blogs",  name:'blogPage', component:()=>import('../pages/blog/blogPage.vue'),
    beforeEnter: authGuard,
  },
  
  { path: "/examples/forms", name: "Example", component: () => import('../pages/profile/forms/Example.vue') ,     beforeEnter: authGuard, },
  
      {
        path: '/examples/forms/account',
        name: 'Account',
        component: ()=> import('../pages/profile/forms/Account.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/examples/forms/appearance',
        name: 'Appearance',
        component: ()=> import('../pages/profile/forms/Appearance.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/examples/forms/notifications',
        name: 'Notifications',
        component: ()=> import('../pages/profile/forms/Notifications.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/examples/forms/display',
        name: 'Display',
        component: ()=> import('../pages/profile/forms/Display.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/document/Quranic',
        name: 'QuranicPage',
        component: ()=> import('../pages/document/QuranicPage.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/document/Sona',
        name: 'SonaPage',
        component: ()=> import('../pages/document/SonaPage.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/document/ArabicLanguage',
        name: 'ArabicLanguagePage',
        component: ()=> import('../pages/document/ArabicLanguagePage.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/document/EnglishLanguage',
        name: 'EnglishLanguagePage',
        component: ()=> import('../pages/document/EnglishLanguagePage.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/document/Computer',
        name: 'ComputerPage',
        component: ()=> import('../pages/document/ComputerPage.vue'),
        beforeEnter: authGuard,
      },
  { path: "/course", name: 'coursePage', component: () => import('../pages/courses/courseS.vue'),
    beforeEnter: authGuard,
   },
  { path: "/allCourses", name: 'allCourses', component: () => import('../pages/courses/allCourses.vue'),     beforeEnter: authGuard, },
 
  {path:"/", name:'dashBord', component:()=>import('../pages/dashbord/dashBord.vue')},
  { path: "/event", name: 'eventPage', component: () => import('../pages/events/eventPage.vue'),    beforeEnter: authGuard, },
  { path: "/profile", name: "profilePage", component: () => import('../pages/profile/profilePage.vue'),    beforeEnter: authGuard, },
  { path: "/courseDetails/:id", name: "CourseDetails", component: () => import('../pages/courses/CourseDetails.vue') ,    beforeEnter: authGuard,},
  { path: "/AddCourse", name: "AddCourse", component: () => import('../pages/courses/AddCourse.vue'),    beforeEnter: authGuard, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

