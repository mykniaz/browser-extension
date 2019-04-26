// Libs
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
  request.url += `${(request.url.indexOf('?') > 0 ? '&' : '?')}cache=${new Date().getTime()}`;
  next();
});

const WEATHER_KEY = 'b6907d289e10d714a6e88b30761fae22';

export default {
  GET_WEATHER({ commit }, city) {
    const requestLink = `https://samples.openweathermap.org/data/2.5/forecast/hourly?q=${city},us&mode=xml&appid=${WEATHER_KEY}`;

    return Vue.http.get(requestLink)
      .then((response) => {
        commit('updateState', { weather: weatherdata });
      })
  },
}
