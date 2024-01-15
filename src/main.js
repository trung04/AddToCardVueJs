import './assets/main.css'
import { createApp } from 'vue'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import BaseModal from "./components/BaseModal.vue";
import App from './App.vue'
const app=createApp(App);
app.component("base-modal",BaseModal);
createApp(App).mount('#app');
