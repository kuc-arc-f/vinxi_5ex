import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import startProc from "./utils/startProc";
startProc.start();

const app =createApp(App);
app.use(router);
app.mount('#root');
