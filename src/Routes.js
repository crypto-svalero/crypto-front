import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Cryptos from '@/pages/Cryptos/Cryptos';
import Products from '@/pages/Products/Products';
import Fiats from '@/pages/Fiats/Fiats';
import NFTs from '@/pages/NFTs/NFTs';
import Games from '@/pages/Games/Games';
import Home from '@/pages/Visits/Visits';
import ErrorPage from '@/pages/Error/Error';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
        },
        {
          path: 'cryptos',
          name: 'Cryptos',
          component: Cryptos,
        },
        {
          path: 'products',
          name: 'Products',
          component: Products,
        },
        {
          path: 'fiats',
          name: 'Fiats',
          component: Fiats,
        },
        {
          path: 'games',
          name: 'Games',
          component: Games,
        },
        {
          path: 'nfts',
          name: 'NFTs',
          component: NFTs,
        },
      ],
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage,
    }
  ],
});
