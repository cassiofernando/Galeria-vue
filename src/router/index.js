import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Photos from '@/components/Photos';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: Home,
    },
    {
      path: '/album/:id', component: Photos,
    },
  ],
});
