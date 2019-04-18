import Vue from 'vue';
import App from './App';

global.browser = require('webextension-polyfill');

/* eslint-disable no-new */
new Vue({
  el: '#options',
  render: h => h(App),
});
