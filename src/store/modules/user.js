const user = {
  state: {
    name: '王富贵',
    age: '',
    sex: ''
  },

  mutations: {
    SET_USER: (state, data) => {
      state.name = data.name
      state.age = data.age
      state.sex = data.sex
    },
  },

  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
  }

}

export default user
