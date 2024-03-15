<template>
  <div>

    

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
    <!-- <p>{{ $store.state.tarefas }}</p> -->
  </div>
</template>

<script>
  import Tarefa from '@/components/tarefas/Tarefa.vue'

  export default {
    name: 'Tarefas',
    components: { Tarefa },
      created() {
        this.$store.dispatch('getTasks')
        
      },
    }
</script>
