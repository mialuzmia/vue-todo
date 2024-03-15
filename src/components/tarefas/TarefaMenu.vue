<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(item)"
          >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-icon right>{{ item.icon }}</v-icon>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar 
      v-if="items[0].showModal"
      @closeModal="items[0].showModal = false"
      :tarefa="tarefa"
    />
    <ModalDeletar 
      v-if="items[1].showModal"
      @closeModal="items[1].showModal = false"
      :tarefa="tarefa"
    />

  </div>
</template>

<script>
import ModalEditar from '@/components/modals/ModalEditar.vue'
import ModalDeletar from '@/components/modals/ModalDeletar.vue';

  export default {
    props: ['tarefa'],
    components: { ModalEditar, ModalDeletar },
    data: () => ({
      items: [
        { 
          title: 'Editar', 
          icon: 'mdi-pencil',
          showModal: false,
        },
        { 
          title: 'Deletar',
          icon: 'mdi-trash-can',
          showModal: false,
        },
      ],
    }),
    methods: {
      handleClick(item){
        item.showModal = true
        // if (item.title === 'Editar') {
        //   console.log('editar')
        //   item.showModal = !item.showModal
        // }else if(item.title === 'Deletar') {
        //   console.log('deletar')
        //   item.showModal = !item.showModal
        // }
      }
    },
  }
</script>

<style >

</style>