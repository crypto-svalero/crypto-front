import Vue from 'vue';
import Vuex from 'vuex';

import layout from './modules/layout';
import crypto from './modules/crypto';
import products from './modules/products';
import fiats from './modules/fiats';
import games from './modules/games';
import nfts from './modules/nfts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    crypto,
    products,
    fiats,
    games,
    nfts
  },
});
