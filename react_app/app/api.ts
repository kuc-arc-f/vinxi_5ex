import { eventHandler, readBody , getQuery } from "vinxi/http";
import { getWebRequest , getRequestURL } from "vinxi/http";
import { getResponseStatus, setResponseStatus } from 'vinxi/server';
import apisendRouter from './api/apisend';
//import test from './api/test';

export default eventHandler (async (event) => {
  const request = getWebRequest(event); 
  const url = getRequestURL(event);
  //console.log(request);
  console.log("method=", request.method);
  console.log("pathname=", url.pathname);

  try{
    if(request.method === "GET"){
      const query = getQuery(event); 
      console.log(query);
      const data = { message: query };
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if(request.method === "POST"){
      let result = null;
      if (url.pathname.startsWith('/api/apisend')) {
        result = await apisendRouter.post(url.pathname, event)
        return result;
      }
    }
    setResponseStatus(event, 404, 'Not Found');
    return 'Not Found';
  }catch(e){
    console.error(e);
    setResponseStatus(event, 500, 'Server Error');
    return 'Server Error';
  };
});
