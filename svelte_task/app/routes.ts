import Home from './client/Home.svelte'
import About from './client/About.svelte'
import TaskProject from './client/TaskProject.svelte'
import TaskProjectCreate from './client/task_project/Create.svelte';
import TaskProjectShow from './client/TaskProjectShow.svelte';
import TaskItemsCreate from './client/task_items/Create.svelte'
import TaskItemsEdit from './client/task_items/Edit.svelte'
import Test1 from './client/Test1.svelte'
import Todo from './client/Todo.svelte'
import Todo11 from './client/Todo11.svelte'
//console.log("App.svelte");

export const routes = {
  '/': Home,
  '/about': About,
  '/task_project': TaskProject,
  '/task_project/create': TaskProjectCreate,
  '/task_project_show': TaskProjectShow,
  '/task_items/create': TaskItemsCreate,
  '/task_items/edit': TaskItemsEdit,
  '/test1': Test1,
  '/todo': Todo,
  '/todo11': Todo11,
}
