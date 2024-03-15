<template>
  <div>
    <v-list-item 
      :class="{'blue lighten-4' : tarefa.isDone}" 
      @click="tarefa.isDone = !tarefa.isDone"
    >
      <template v-slot:default="{ }">
        <v-list-item-action @click="tarefa.isDone = !tarefa.isDone">
          <v-checkbox v-model="tarefa.isDone"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title 
          :class="{'text-decoration-line-through' : tarefa.isDone}" 
          >
            {{ tarefa.title }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <TarefaMenu :tarefa="tarefa"/>
        </v-list-item-action>

      </template>
    </v-list-item>

    <v-divider></v-divider>
    
  </div>
</template>

<script>
  import TarefaMenu from './TarefaMenu.vue';

  export default {
    name:'Tarefa',
    props: ['tarefa'],
    components: { TarefaMenu },
    methods: {
      handleDeleteTask(id) {
        console.log(id)
        this.$store.commit('deleteTask', id)
      }
    },
  }
</script>

<style >

</style>
