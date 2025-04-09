import { defineStore } from 'pinia'
import axios from 'axios'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
    isAuthenticated: false
  }),
  
  actions: {
    async login() {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/fibraon/client/oauth2/token`, {
          client_id: "19CVZJpL3N5h3UEYpLfSaW9jUQ0eKe7R",
          client_secret: "1VtqxNZ9hcBez7eiKp0qhsF1HKAqcmwh",
          grant_type: "client_credentials"
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })

        this.token = response.data.access_token
        this.isAuthenticated = true
        
        return true
      } catch (error: any) {
        console.error('Authentication error:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status
        })
        throw error
      }
    },

    logout() {
      this.token = null
      this.isAuthenticated = false
    }
  }
})