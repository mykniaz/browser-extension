<template>
  <div>
    <button
      type="button"
      @click="goTo('/')"
    >
      назад
    </button>
    <button @click="getWeather">
      Получить погоду
    </button>
    <ol v-if="weather.daily">
      <li
        v-for="(item, index) in weather.daily.data"
        :key="index"
      >
        {{ item }}
      </li>
    </ol>
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

    goTo(link) {
      this.$router.push(link);
    },
  },
};
</script>
