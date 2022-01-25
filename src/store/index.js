import { createStore } from 'vuex'
import user from './modules/user'
import car from './modules/car'
import getters from './getters'

const store = new createStore({
  modules: {
    user,
    car
  },
  getters
})

export default store
