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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputText: '',
        
      }
    },
    methods: {
      handleAddTask(){
        this.$store.dispatch('addTask', this.inputText)
        this.inputText = ''
        }
      },
  }
</script>

<style >

</style>