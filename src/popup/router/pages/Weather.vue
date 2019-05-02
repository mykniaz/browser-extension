<template>
  <div>
    <button @click="getWeather">
      Получить погоду
    </button>
    {{ weather }}
  </div>
</template>

<script>
// Vuex
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Weather',

  computed: {
    ...mapState(['weather']),
  },

  methods: {
    ...mapActions(['GET_WEATHER']),

    getWeather() {
      this.GET_WEATHER('London');
    },
  },
};
</script>
