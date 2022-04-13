import { createStore } from 'vuex'


export const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  },
  getters: {
    count(state) {
      return state.count * 2
    }
  },
  modules: {
    a: {
      state: {
        count: 0
      },
      mutations: {
        increment(state) {
          state.count++
        }
      },
      actions: {
        increment({ commit }) {
          commit('increment')
        }
      },
      getters: {
        count(state) {
          return state.count * 2
        }
      },
      namespaced: true
    }
  }
})