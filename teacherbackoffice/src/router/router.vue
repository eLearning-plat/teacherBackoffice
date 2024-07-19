<script>
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: "/blogs",  name:'blogPage', component:()=>import('../pages/blog/blogPage.vue')},
 
  { path: "/course", name: 'coursePage', component: () => import('../pages/courses/courseS.vue') },
 
  {path:"/dashbord", name:'dashBord', component:()=>import('../pages/dashbord/dashBord.vue')},
  { path: "/event", name: 'eventPage', component: () => import('../pages/events/eventPage.vue') },
  { path: "/document", name: 'documentPage', component: () => import('../pages/document/documentPage.vue') },
  { path: "/profile", name: "profilePage", component: () => import('../pages/profile/profilePage.vue') },
  { path: "/courseDetails", name: "coursDetails", component: () => import('../pages/courses/coursDetails.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
</script>
