import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './auth'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const useApiStore = defineStore('api', {
  actions: {
    async fetchAccessLogs(dateFrom: string, dateTo: string, subscribeId?: string) {
      const authStore = useAuthStore()
      return axios.get(`${baseURL}/fibraon/accesslog`, {
        headers: {
          'Authorization': authStore.token,
          'DATE-FROM': dateFrom,
          'DATE-TO': dateTo,
          'SUBSCRIBE-ID': subscribeId || '',
          'Content-Type': 'application/json'
        }
      })
    },

    async fetchAccessDashboard(dateFrom: string, dateTo: string) {
      const authStore = useAuthStore()
      return axios.get(`${baseURL}/fibraon/accessdash`, {
        headers: {
          'Authorization': authStore.token,
          'DATE-FROM': dateFrom,
          'DATE-TO': dateTo,
          'Content-Type': 'application/json'
        }
      })
    },

    async fetchUserLogs(dateFrom: string, dateTo: string, subscribeId?: string) {
      const authStore = useAuthStore()
      return axios.get(`${baseURL}/fibraon/userlog`, {
        headers: {
          'Authorization': authStore.token,
          'DATE-FROM': dateFrom,
          'DATE-TO': dateTo,
          'SUBSCRIBE-ID': subscribeId || '',
          'Content-Type': 'application/json'
        }
      })
    },

    async fetchPurchaseLogs(dateFrom: string, dateTo: string, subscribeId?: string) {
      const authStore = useAuthStore()
      return axios.get(`${baseURL}/fibraon/purchaselog`, {
        headers: {
          'Authorization': authStore.token,
          'DATE-FROM': dateFrom,
          'DATE-TO': dateTo,
          'SUBSCRIBE-ID': subscribeId || '',
          'Content-Type': 'application/json'
        }
      })
    },

    async fetchPurchaseDashboard(dateFrom: string, dateTo: string) {
      const authStore = useAuthStore()
      return axios.get(`${baseURL}/fibraon/purchasedash`, {
        headers: {
          'Authorization': authStore.token,
          'DATE-FROM': dateFrom,
          'DATE-TO': dateTo,
          'Content-Type': 'application/json'
        }
      })
    },

    async fetchUserActions(dateFrom: string, dateTo: string, subscribeId: string, page: number = 1, pageSize: number = 100) {
      const authStore = useAuthStore()
      return axios.get(`${baseURL}/fibraon/user/actions`, {
        headers: {
          'Authorization': authStore.token,
          'DATE-FROM': dateFrom,
          'DATE-TO': dateTo,
          'SUBSCRIBE-ID': subscribeId,
          'Content-Type': 'application/json',
          'PAGE': page.toString(),
          'PAGE-SIZE': pageSize.toString()
        }
      })
    },

    async fetchHighUsers(dateFrom: string, dateTo: string, subscribeId?: string) {
      const authStore = useAuthStore()
      return axios.get(`${baseURL}/fibraon/highuser`, {
        headers: {
          'Authorization': authStore.token,
          'DATE-FROM': dateFrom,
          'DATE-TO': dateTo,
          'SUBSCRIBE-ID': subscribeId || '',
          'Content-Type': 'application/json'
        }
      })
    },

    async fetchConfinementDashboard(dateFrom: string, dateTo: string) {
      const authStore = useAuthStore()
      return axios.get(`${baseURL}/fibraon/confinementdash`, {
        headers: {
          'Authorization': authStore.token,
          'DATE-FROM': dateFrom,
          'DATE-TO': dateTo,
          'Content-Type': 'application/json'
        }
      })
    }
  }
})