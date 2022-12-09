import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons'
// import 'bootstrap-icons/bootstrap-icons.svg'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'


createApp(App).use(router).mount('#app')
