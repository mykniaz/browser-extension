<template>
  <div :style="{ backgroundColor: backgroundColor }">
    <h1>
      Манифест
    </h1>
    <div>
      {{ $browser.runtime.getManifest() }}
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
    tabsInfo: [],
  }),

  computed: {
    ...mapGetters(['backgroundColor']),
  },

  created() {
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
