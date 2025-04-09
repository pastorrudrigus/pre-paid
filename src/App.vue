<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <img src="/obvious-fibra-white.png" alt="Obvious Fibra" style="height: 30px;" />
        </q-toolbar-title>

        <q-btn flat round dense icon="person" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <q-item clickable v-ripple to="/dashboard">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/access-logs">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>Logs de Acesso</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/user-logs">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>Logs de Usuários</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/sales">
          <q-item-section avatar>
            <q-icon name="shopping_cart" />
          </q-item-section>
          <q-item-section>Vendas</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="sass">
.q-toolbar
  height: 64px

.q-drawer
  .q-item
    border-radius: 0 24px 24px 0
    margin-right: 12px
    &.q-router-link-active
      background: rgba($primary, 0.12)
      color: $primary
      .q-icon
        color: $primary
</style>