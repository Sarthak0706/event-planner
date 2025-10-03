import { createStore } from "vuex";

export default createStore({
  state: {
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {
    addEvent({ commit }, event) {
      event.id = Date.now();
      commit("ADD_EVENT", event);
    }
  },
  getters: {
    allEvents: (state) => state.events
  }
});
