<template>
  <div
    :style="`color: ${backgroundColor}`"
    class="options"
  >
    <h1>Страница настроек</h1>
    <OptionsRow>
      <template slot="title">
        Цвет
      </template>
      <select @change="changeColor" v-model="backgroundColor">
        <option value="#fff">Белый</option>
        <option value="#333">Серый</option>
      </select>
    </OptionsRow>
  </div>
</template>

<script>
// Vuex
import { mapMutations, mapState, mapGetters } from 'vuex';

// Components
import OptionsRow from './OptionsRow';

export default {
  name: 'Options',

  components: {
    OptionsRow,
  },

  data: () => ({
    backgroundColor: null,
  }),

  computed: {
    ...mapGetters(['backgroundColor']),
    ...mapState(['options']),
  },

  methods: {
    ...mapMutations(['updateOption']),

    changeColor() {
      this.updateOption({ backgroundColor: this.backgroundColor });
    },
  },
};
</script>