<template>
  <div :style="{ backgroundColor: backgroundColor }">
    <h1>
      Текущая вкладка
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
    tabsInfo: {},
  }),

  computed: {
    ...mapGetters(['backgroundColor']),
  },

  created() {
    this.setActiveTab();
  },

  methods: {
    setActiveTab() {
      this.$browser.tabs.query({ active: true, windowId: browser.windows.WINDOW_ID_CURRENT }).then(tabs => {
        this.tabsInfo = tabs;
      });
    },
  },
};
</script>
