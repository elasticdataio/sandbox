import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Price from '../components/Price.vue'
import TextWithSpaces from '../components/TextWithSpaces.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/price',
    name: 'price',
    component: Price,
  },
  {
    path: '/text-with-spaces',
    name: 'text-with-spaces',
    component: TextWithSpaces,
  },
  {
    path: '/pagination/:page',
    name: 'pagination',
    component: () => import('../views/Pagination.vue'),
    props: (route: any) => {
      return {
        page: parseInt(route.params.page)
      };
    },
  },
  {
    path: '/inner-page',
    name: 'inner-page',
    component: () => import('../views/InnerPage.vue'),
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../components/Product.vue'),
    props: (route: any) => {
      return {
        id: parseInt(route.params.id)
      };
    },
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
