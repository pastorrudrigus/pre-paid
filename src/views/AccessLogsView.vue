<template>
  <q-page padding>
    <h2 class="text-h5 q-mb-md">Logs de Acesso</h2>
    <q-table
      title="Histórico de Acessos"
      :rows="[]"
      :columns="columns"
      row-key="id"
      :loading="loading"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
const columns = [
  { name: 'data', label: 'Data', field: 'data', sortable: true },
  { name: 'usuario', label: 'Usuário', field: 'usuario', sortable: true },
  { name: 'acao', label: 'Ação', field: 'acao' },
  { name: 'status', label: 'Status', field: 'status' }
]
</script>