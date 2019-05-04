<template>
  <div :style="{ backgroundColor: backgroundColor }">
    <h1>
      Текущая вкладка
    </h1>
    <div>
      {{ tabInfo }}
    </div>
    <h1>
      Открытые вкладки
    </h1>
    <div>
      {{ tabsInfo }}
    </div>
  </div>
</template>

<script>
// Vuex
import { mapGetters } from 'vuex';

export default {
  name: 'Browser',

  data: () => ({
    tabInfo: {},
    tabsInfo: [],
  }),

  computed: {
    ...mapGetters(['backgroundColor']),
  },

  created() {
    this.getTabsByFilter({ active: true, windowId: browser.windows.WINDOW_ID_CURRENT }).then(tabs => {
      this.tabInfo = tabs[0];
    });
    this.tabsInfo = this.getTabsByFilter({ currentWindow: true }).then(tabs => {
      this.tabsInfo = tabs;
    });
  },

  methods: {
    getTabsByFilter(filter) {
      return this.$browser.tabs.query(filter);
    },
  },
};
</script>
