import { mount } from 'svelte'
import './style.css'
import App from './App.svelte'
import startProc from "./utils/startProc";
startProc.start();

const app = mount(App, {
  target: document.getElementById('root')!,
})

export default app
