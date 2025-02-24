import HttpCommon from "../../utils/HttpCommon";

let API_BASE = import.meta.env.VITE_API_URL;

async function getSysApiUrl(){
  try{
    let ret = "";
    const response = await fetch(`/api/common/get_sys_items`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      }
    );
    if (!response.ok) throw new Error("error, getSystemParam");
    const data = await response.json();
    //console.log(data.data);
    ret = data.data.api_url;
    return ret;
  } catch (err) {
    console.error(err);
  }
}
// 
export async function fetchTodos() {
  //console.log("apiUrl=", API_BASE);
  const response = await fetch(`${API_BASE}/api/todo11`);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
}

export async function createTodo(todo: Todo) {
  const response = await HttpCommon.post(todo,  '/api/todo11');
  console.log(response);
  //if (!response.ok) throw new Error('Failed to create todo');
  return response;
}

export async function updateTodo(id: number, todo: Todo) {
  todo.id = id;
  const response = await HttpCommon.post(todo,  '/api/todo11update');
  console.log(response);
  return response;
}

export async function deleteTodo(id: number) {
  const item = {id: id}
  const response = await HttpCommon.post(item,  '/api/todo11delete');
  console.log(response);

  //if (!response.ok) throw new Error('Failed to delete todo');
  return response;
}

export async function searchTodos(query: string) {
  const response = await fetch(`${API_BASE}/api/todo11/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Failed to search todos');
  return response.json();
}