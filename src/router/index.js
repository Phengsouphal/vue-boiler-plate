import { useUserStore } from '@/pinia/modules/user'
import { computed } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const EditMyInfo = () => import('@/views/EditMyInfo.vue')
const HomePage = () => import('@/views/HomePage.vue')
const SignUp = () => import('@/views/SignUp.vue')
const FormSample = () => import('@/views/FormSample.vue')
const NotFound = () => import('@/views/NotFound.vue')
const Animation = () => import('@/views/Animation.vue')
const PlantsUi = () => import('@/views/PlantsUi.vue')


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { requiresAuth: true },
  },

  {
    path: '/posts',
    name: 'posts',
    meta: { requiresAuth: true },
    component: EditMyInfo,
  },
  {
    path: '/signup',
    name: 'signup',
    meta: { requiresUnAuth: false },
    component: SignUp,
  },
  {
    path: '/test',
    name: 'test',
    meta: { requiresUnAuth: false },
    component: FormSample,
  },
  {
    path: '/plant',
    name: 'plant',
    meta: { requiresUnAuth: false },
    component: PlantsUi,
  },
  {
    path: '/animation',
    name: 'animation',
    meta: { requiresUnAuth: false },
    component: Animation,
  },
  { path: "/:notFound(.*)", component: NotFound },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  // ...
  // explicitly return false to cancel the navigation
  // if ('auth' in to.meta && to.meta.auth && userStore.isAuthenticated()) {

  //   next('/posts')

  // } else if (!to.meta.auth && !userStore.isAuthenticated()) {

  //   next('/signup')

  // } else {
  //   console.log(to.meta.auth, '====== next next :::', userStore.isAuthenticated());
  //   next()

  // }
  if (to.meta.requiresAuth && !userStore.isAuthenticated()) {

    console.log(to.meta.requiresAuth, '====== posts posts :::', userStore.isAuthenticated());
    next("/signup");

  } else if (to.meta.requiresUnAuth && userStore.isAuthenticated()) {

    console.log(to.meta.auth, '====== signup signup :::', userStore.isAuthenticated());
    next("/posts");

  } else {

    console.log(to.meta.auth, '====== next next :::', userStore.isAuthenticated());
    next();
  }
})

export default router
