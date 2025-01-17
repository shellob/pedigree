import { genHash } from "./modals"

export const PERSONS = "persons"
const initialState = []
export default {
  namespaced: true,
  state: {
    persons: JSON.parse(localStorage.getItem(PERSONS)) || initialState
  },
  getters: {
    getAllPersons: (state) => state,
    getPersonById: (state) => (id) => state.persons.find((person) => person.id === id),
    filteredPersons: (state) => (filterFunction) => state.persons.filter(filterFunction)
  },
  mutations: {
    addPerson: (state, payload) => {
      state.persons.push({ id: genHash(), ...payload })
      localStorage.setItem(PERSONS, JSON.stringify(state.persons))
    },
    deletePerson: (state, payload) => {
      state.persons = state.persons.filter((p) => p.id !== payload)
      localStorage.setItem(PERSONS, JSON.stringify(state.persons))
    },
    editPerson: (state, payload) => {
      state.persons = state.persons.map((p) => (p.id === payload.id ? { ...p, ...payload } : p))
      localStorage.setItem(PERSONS, JSON.stringify(state.persons))
    }
  },
  actions: {
    addPerson: ({ commit }, payload) => {
      commit("addPerson", payload)
    },
    deletePerson: ({ commit }, payload) => {
      commit("deletePerson", payload)
    },
    editPerson: ({ commit }, payload) => {
      commit("editPerson", payload)
    }
  }
}
