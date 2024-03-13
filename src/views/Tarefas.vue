<template>
  <div>

    <v-col
          cols="12"
        >
          <v-text-field
            v-model="inputText"
            label="Digite uma tarefa"
            outlined
            clearable
            @keyup.enter="handleAddTask"
          ></v-text-field>
        </v-col>

    <v-list
      flat
      subheader
    >

      <v-list-item-group

        multiple 
        active-class=""
      >
      <div v-for="tarefa, index in $store.state.tarefas" :key="index">
        <!-- <Tarefa :title="tarefa.title" :isDone="tarefa.isDone" /> -->
        <Tarefa :tarefa="tarefa"/>

      </div>
        
      </v-list-item-group>

    </v-list>
    <p>{{ $store.state.tarefas }}</p>
  </div>
</template>

<script>
  import Tarefa from '@/components/tarefas/Tarefa.vue'

  export default {
    name: 'Tarefas',
    components: { Tarefa },
    data() {
      return {
        inputText: '',
        
      }
    },
    methods: {
      handleAddTask(){
          this.$store.commit('addTask', this.inputText)
          this.inputText = ''
        }
      },
    }
</script>
