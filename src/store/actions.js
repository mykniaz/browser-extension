// Libs
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const WEATHER_KEY = '0a9000e79918703ccb117bc68119d501';

export default {
  GET_WEATHER({ commit }) {
    const requestLink = `https://api.darksky.net/forecast/${WEATHER_KEY}/50.0, 36.15`;

    return Vue.http.get(requestLink).then(({ body }) => {
      commit('updateState', { weather: body });
    });
  },
};
