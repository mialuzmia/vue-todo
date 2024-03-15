import Localbase from 'localbase'

let db = new Localbase('db')

export default {
  async getTasks({commit}){
    const tarefasDB = await db.collection('tarefas').get()
    commit('setTasks', tarefasDB)
    console.log(tarefasDB)
  },
  async addTask({dispatch}, title){

    if (title) {
      await db.collection('tarefas').add({ 
        id: new Date().getTime(),
        title, 
        isDone: false 
      })
      dispatch('getTasks')
    }
    
  },
  async updateTask({dispatch}, newTask){
    await db.collection('tarefas').doc({ id: newTask.id }).update({
      title: newTask.title
    })

    dispatch('getTasks')
  },
  async deleteTask({dispatch}, id){
    await db.collection('tarefas').doc({ id}).delete()

    dispatch('getTasks')
  },
}