<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar tarefa
        </v-card-title>
        <v-card-text>Infome o novo título.</v-card-text>

        <v-text-field
          label="Título"
          outlined
          class="px-5"
          v-model="title"
          @keyup.enter="handleEditar"
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('closeModal')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="handleEditar"
          >
            Editar
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
        title: '',
      }
    },
    methods: {
      handleEditar() {
        const newTask = {
          title: this.title,
          id: this.tarefa.id
        }
        this.$store.dispatch('updateTask', newTask)
        this.$emit('closeModal')
      }
    },
    created(){
      this.title = this.tarefa.title
    }
  }
</script>

<style >

</style>