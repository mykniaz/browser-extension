<template>
  <div
    :style="{ backgroundColor: backgroundColor }"
    class="options"
  >
    <h1>Страница настроек</h1>
    <OptionsRow>
      <template slot="title">
        Цвет
      </template>
      <select @change="changeColor" v-model="color">
        <option value="#fff">Белый</option>
        <option value="#333">Серый</option>
        <option value="#00ff00">Зеленый</option>
      </select>
    </OptionsRow>
  </div>
</template>

<script>
// Vuex
import { mapMutations, mapGetters } from 'vuex';

// Components
import OptionsRow from './OptionsRow';

export default {
  name: 'Options',

  components: {
    OptionsRow,
  },

  data: () => ({
    color: '',
  }),

  mounted() {
    this.color = this.backgroundColor;
  },

  computed: {
    ...mapGetters(['backgroundColor']),
  },

  methods: {
    ...mapMutations(['updateOption']),

    changeColor() {
      this.updateOption({ backgroundColor: this.color });
    },
  },
};
</script>
