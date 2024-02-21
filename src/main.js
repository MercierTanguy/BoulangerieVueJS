import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import Produits from './pages/Produits.vue'
import Commander from './pages/Commander.vue'


const routes = [
    { path: '/', component: HomePage, name: 'landing-page', alias: '/landing'},
    { path: '/Produits', component: Produits},
    { path: '/Commander', component: Commander}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})
   
const app = createApp(App)

app.use(router)
app.mount('#app')
