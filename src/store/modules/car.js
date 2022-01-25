const car = {
  state: {
    name: '卡宴',
    model: '',
    cost: ''
  },

  mutations: {
    SET_CAR: (state, data) => {
      state.name = data.name
      state.model = data.model
      state.cost = data.cost
    },
  },

  actions: {
    setCar({ commit }, car) {
      commit('SET_CAR', car)
    },
  }

}

export default car
