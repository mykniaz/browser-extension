import store from './store';
global.browser = require('webextension-polyfill');

alert(`Hello ${store.getters.foo}${store.getters.backgroundColor}!`);

// Page injection
browser.contextMenus.create({
  id: 'eat-page',
  title: 'Eat this page',
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == 'eat-page') {
    browser.tabs.executeScript({
      file: 'page-eater.js',
    });
  }
});

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({
    url: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions"
  });
});
