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

// Create Bookmark
function onCreated(node) {
  console.log(node);
}

var createBookmark = browser.bookmarks.create({
  title: "workle",
  url: "https://workle.ru/",
});


createBookmark.then(onCreated);
