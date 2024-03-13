import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      {id: 1, title: 'Ir ao mercado', isDone: false},
      {id: 2, title: 'Comprar ração', isDone: false},
    ]
  },
  mutations: {
    addTask(state, title) {
      if (title) {
        state.tarefas.push({ 
          id: new Date().getTime(),
          title, 
          isDone: false 
        })
      }
    },
    deleteTask(state, id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    },
  },
  actions: {
  },
  modules: {
  }
})
