import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Notify, Loading } from 'quasar'
import router from './router'

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  plugins: {
    Notify,
    Loading
  },
  config: {
    brand: {
      primary: '#E6007E',
      secondary: '#00B050',
      accent: '#9C27B0',
      dark: '#1D1D1D',
      'dark-page': '#121212',
      positive: '#00B050',
      negative: '#E6007E',
      info: '#00B0F0',
      warning: '#F2C037'
    },
    notify: {
      position: 'top',
      timeout: 2500,
      textColor: 'white'
    },
    loading: {
      spinnerColor: 'primary',
      spinnerSize: 140
    }
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')