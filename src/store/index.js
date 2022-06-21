import Vue from 'vue';
import Vuex from 'vuex';

import layout from './modules/layout';
import crypto from './modules/crypto';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    crypto
  },
});
