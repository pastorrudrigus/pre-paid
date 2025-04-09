<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-4">
        <q-card>
          <q-card-section>
            <div class="text-h6">Acessos Hoje</div>
            <div class="text-h4 q-mt-sm text-primary">{{ accessCount || 0 }}</div>
          </q-card-section>
        </q-card>
      </div>
      
      <div class="col-12 col-md-6 col-lg-4">
        <q-card>
          <q-card-section>
            <div class="text-h6">Vendas Hoje</div>
            <div class="text-h4 q-mt-sm text-primary">R$ {{ salesTotal || 0 }}</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6 col-lg-4">
        <q-card>
          <q-card-section>
            <div class="text-h6">Usuários Ativos</div>
            <div class="text-h4 q-mt-sm text-primary">{{ activeUsers || 0 }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useApiStore } from '../stores/api'
import { format } from 'date-fns'

const apiStore = useApiStore()
const accessCount = ref(0)
const salesTotal = ref(0)
const activeUsers = ref(0)

const loadDashboardData = async () => {
  const today = new Date()
  const dateFrom = format(today, "yyyy-MM-dd'T'00:00:00")
  const dateTo = format(today, "yyyy-MM-dd'T'23:59:59")

  try {
    const [accessData, salesData] = await Promise.all([
      apiStore.fetchAccessDashboard(dateFrom, dateTo),
      apiStore.fetchPurchaseDashboard(dateFrom, dateTo)
    ])

    accessCount.value = accessData.data.total || 0
    salesTotal.value = salesData.data.total || 0
    activeUsers.value = accessData.data.active_users || 0
  } catch (error) {
    console.error('Error loading dashboard data:', error)
  }
}

onMounted(() => {
  loadDashboardData()
})
</script>