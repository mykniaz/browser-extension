export default {
  updateState(state, data) {
    Object.assign(state, data);
  },

  updateOption(state, option) {
    Object.assign(state.options, option);
  },
};
