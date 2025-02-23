import { eventHandler, readBody , getQuery } from "vinxi/http";
import { getWebRequest , getRequestURL } from "vinxi/http";
import { getResponseStatus, setResponseStatus } from 'vinxi/server';

const test = {

  test1: async function(pathname: string, event: any){
    const url = import.meta.env.VITE_API_URL ;
    const targetPath = url + "/api/xxx";
    console.log("targetPath=", targetPath);

    const body = await readBody(event); 
    console.log(body);
    const res = await fetch(targetPath, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},      
      body: JSON.stringify(body)
    });
    if (res.status !== 200) {
      console.error("Error, HTTP <> 200");
      setResponseStatus(event, 400, 'Bad Request');
      return 'Bad Request';
    }        
    const resObj = await res.json();
    return new Response(JSON.stringify(resObj), {
      headers: { 'Content-Type': 'application/json' },
    });
  },

}
export default test;
