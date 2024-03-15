<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Excluir tarefa
        </v-card-title>
        <v-card-text>Tem certeza que deseja excluir a terefa?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$emit('closeModal')"
            >
            não
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="handleDeletar"
          >
            sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: ['tarefa'],
    data () {
      return {
        dialog: true,
      }
    },
    methods: {
      handleDeletar() {
        this.$store.dispatch('deleteTask', this.tarefa.id)
        this.$emit('closeModal')
      }
    },
  }
</script>

<style >

</style>