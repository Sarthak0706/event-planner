import { createStore } from "vuex";

export default createStore({
  state: {
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    DELETE_EVENT(state,id)
    {
      if (!state.events) return;
      const index=state.events.findIndex(event=>event.id===id);
      if(index!==-1)
      {
        state.events.splice(index,1);
      }
    }
  },
  actions: {
    addEvent({ commit }, event) {
      event.id = Date.now();
      commit("ADD_EVENT", event);
    },
    deleteEvent({commit},id)
    {
      commit("DELETE_EVENT",id);
    }
  },
  getters: {
    allEvents: (state) => state.events
  }
});
