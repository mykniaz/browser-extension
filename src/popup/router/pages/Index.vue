<template>
  <div class="body">
    <h1>Это расширение было создано с использованием Vue.js</h1>
    <p>
      примеры возможностей:
    </p>
    <ul>
      <li>
        <button
          type="button"
          @click="goTo('/weather')"
        >
          Пример получения данных
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="goTo('/browser')"
        >
          объект Browser
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data: () => ({
  
  }),

  methods: {
    goTo(link) {
      this.$router.push(link);
    },
  },
};
</script>
