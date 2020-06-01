import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    selectedUsers: [],
    searchQuery: ""
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    setSearchQuery(state, query) {
      state.searchQuery = query
    }
  },
  actions: {
    async getAllUsers({ commit }) {
      try {
        const users = await fetch('https://api.github.com/users')
        return await users.json()
      } catch (e) {
        commit('setError', e)
        console.log('Error', e)
      }
    },
    async getUserByLogin({ commit }, login) {
      try {
        const fetchUser = await fetch(`https://api.github.com/users/${login}`)
        return await fetchUser.json()
      } catch (e) {
        commit('setError', e)
        console.log('Error', e)
      }
    },
    getUsersFromLocalStorage({ commit }) {
      try {
        return JSON.parse(localStorage.getItem('users')) || []
      } catch (e) {
        commit('setError', e)
        console.log('Error', e)
      }
    },
    async addUserToLocalStorage({ commit, dispatch }, user) {
      try {
        const users = await dispatch('getUsersFromLocalStorage')
        if(!users.some(item => item.id === user.id)) {
          users.push(user)
        }
        localStorage.setItem('users', JSON.stringify(users))
      } catch (e) {
        commit('setError', e)
        console.log('Error', e)
      }
    },
    async removeUserById({ commit, dispatch }, id) {
      try {
        let users = await dispatch('getUsersFromLocalStorage')
        users = users.filter( user => user.id !== id)
        localStorage.setItem('users', JSON.stringify(users))
        return users
      } catch (e) {
        commit('setError', e)
        console.log('Error', e)
      }
    },
    async removeAllUsers({ commit }) {
      try {
        const users = []
        localStorage.setItem('users', JSON.stringify(users))
        return users
      } catch (e) {
        commit('setError', e)
        console.log('Error', e)
      }
    }
  },
  modules: {
  }
})
