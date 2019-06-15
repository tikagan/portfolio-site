import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  HelloWorld:{
    name: "Kritika Ganapathy",
    isHidden: false, 
  },
  about:{
    name: "Kritika Ganapathy - about",
    isHidden: false, 
  }
  

} 

const mutations = {
  toggleName(state) {
    state.HelloWorld.isHidden = !state.HelloWorld.isHidden
  }
}

const getters = {
  isHidden(state) {
    return state.HelloWorld.isHidden
  },
  name (state) {
    return state.HelloWorld.name
  }
}

const store = new Vuex.Store({
  state, 
  mutations,
  getters
})

export default store