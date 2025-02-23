import { eventHandler, toWebRequest } from "vinxi/http";
import { sendRedirect, setCookie, getCookie } from "vinxi/http";
import { getWebRequest , getRequestURL } from "vinxi/http";
import { getResponseStatus, setResponseStatus } from 'vinxi/server';
import LibConfig from '../LibConfig';

const LibAuth = {

  renderRedirect: function(){
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head><meta charset="UTF-8" /></head>
      <body><script>location.href="/login"</script></body>
    </html>
    `
  },

  validateAuth: async function(event: any){
    try{
      const authorization = getCookie(event, LibConfig.COOKIE_AUTH_KEY);
      if(authorization){
        console.log("authorization=", authorization);
      }else{
        const url = getRequestURL(event);
        console.log("pathname=", url.pathname);
        if(!(url.pathname === "/login" ) || !(url.pathname === "/signup" )){
          console.log("authorization=NONE");
          return new Response(
            `
            <!DOCTYPE html>
            <html lang="en">
              <head><meta charset="UTF-8" /></head>
              <body><script>location.href="/login"</script></body>
            </html>
            `,
            {
              status: 403,
              headers: {
                "Content-Type": "text/html",
              },
            },
          );
    
        }
      }
    }catch(e){console.error(e)}
  },

}
export default LibAuth;
