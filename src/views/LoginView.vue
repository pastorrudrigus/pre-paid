<template>
  <div class="login-page">
    <q-card class="login-card">
      <q-card-section class="text-center">
        <img src="/obvious-fibra.png" alt="Logo Obvious Fibra" class="logo">
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-btn
            type="submit"
            color="primary"
            label="Acessar Portal"
            class="full-width"
            :loading="loading"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useQuasar } from 'quasar'

const router = useRouter()
const authStore = useAuthStore()
const loading = ref(false)
const $q = useQuasar()

// Verify Quasar is properly initialized
onMounted(() => {
  if (!$q || typeof $q.notify !== 'function') {
    console.error('Quasar is not properly initialized')
  }
})

const onSubmit = async () => {
  loading.value = true
  
  try {
    await authStore.login()
    router.push('/dashboard')
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Erro ao autenticar. Por favor, tente novamente.'
    // Fallback to alert if Quasar notification is not available
    if ($q && typeof $q.notify === 'function') {
      $q.notify({
        type: 'negative',
        message: errorMessage,
        position: 'top'
      })
    } else {
      alert(errorMessage)
    }
  } finally {
    loading.value = false
  }
}
</script>

<style lang="sass">
.login-page
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  background: $grey-1

.login-card
  width: 100%
  max-width: 400px
  padding: 20px
  border-radius: 8px

.logo
  max-width: 200px
  margin-bottom: 20px
</style>