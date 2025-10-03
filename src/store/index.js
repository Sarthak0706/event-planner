import { createStore } from "vuex";

export default createStore({
  state: {
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    UPDATE_EVENT(state,event)
    {
      const index=state.events.findIndex(e=>e.id===event.id);
      if(index!==-1)
      {
        state.events[index]=event;
      }
    }
  },
  actions: {
    addEvent({ commit }, event) {
      event.id = Date.now();
      commit("ADD_EVENT", event);
    },
    updateEvent({commit},event)
    {
      commit("UPDATE_EVENT",event);
    }
  },
  getters: {
    allEvents: (state) => state.events
  }
});
