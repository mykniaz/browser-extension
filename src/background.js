import store from './store';
global.browser = require('webextension-polyfill');

// Page injection
browser.contextMenus.create({
  id: 'eat-page',
  title: 'Eat this page',
});

browser.contextMenus.onClicked.addListener(info => {
  if (info.menuItemId === 'eat-page') {
    browser.tabs.executeScript({
      file: 'page-eater.js',
    });
  }
});
//
// browser.browserAction.onClicked.addListener(() => {
//   browser.tabs.create({
//     url: "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions"
//   });
// });
