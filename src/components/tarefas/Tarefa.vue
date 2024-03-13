<template>
  <div>
    <v-list-item 
      :class="{'blue lighten-4' : tarefa.isDone}" 
      @click="tarefa.isDone = !tarefa.isDone"
    >
      <template v-slot:default="{ }">
        <v-list-item-action>
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
          <v-btn 
          icon
          @click.stop="handleDeleteTask(tarefa.id)"
          >
            <v-icon color="red lighten-1">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>

      </template>
    </v-list-item>

    <v-divider></v-divider>
    
  </div>
</template>

<script>
  export default {
    name:'Tarefa',
    props: ['tarefa'],
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