import Home from './client/Home.svelte'
import About from './client/About.svelte'
import Test1 from './client/Test1.svelte'
import Todo from './client/Todo.svelte'
import Todo11 from './client/Todo11.svelte'
//console.log("App.svelte");

export const routes = {
  '/': Home,
  '/about': About,
  '/test1': Test1,
  '/todo': Todo,
  '/todo11': Todo11,
}
