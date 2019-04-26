import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Store({
  state,
  getters,
  mutations,
  actions,
});
