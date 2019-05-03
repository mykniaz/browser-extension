import store from './store';
global.browser = require('webextension-polyfill');

alert(`Hello ${store.getters.foo}${store.getters.backgroundColor}!`);