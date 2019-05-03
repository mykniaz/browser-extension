<template>
  <div :style="{ backgroundColor: backgroundColor }">
    <h1>
      Обьект Browser
    </h1>
    <div>
      {{ browserInfo }}
    </div>
		<h1>
			Обьект Location
		</h1>
		<div>
			{{ locationInfo }}
		</div>
  </div>
</template>

<script>
// Vuex
import { mapGetters } from 'vuex';

export default {
  name: 'Browser',

  computed: {
    ...mapGetters(['backgroundColor']),

    browserInfo() {
      return this.$browser;
    },
    locationInfo() {
      return location;
    },
  },

  created() {
    console.log(location, this.$browser);
  },
};
</script>
