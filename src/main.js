/*global cordova*/
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

document.addEventListener('deviceready', () => {
  cordova.plugins.notification.local.requestPermission((granted) => {
    console.log('Notification permission granted?', granted)
  })
})

app.mount('#app')
