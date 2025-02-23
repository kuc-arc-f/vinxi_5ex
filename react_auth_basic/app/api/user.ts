import { eventHandler, readBody , getQuery ,setCookie } from "vinxi/http";
import { getWebRequest , getRequestURL } from "vinxi/http";
import { getResponseStatus, setResponseStatus } from 'vinxi/server';
import bcrypt from "bcryptjs";
import {db} from '../../src/index';
import {users} from '../../src/db/schema';
import { eq } from "drizzle-orm";
//const COOKIE_NAME = "vinxi_react_auth"; // Cookie名
import LibConfig from '../utils/LibConfig';

export async function userRoute(pathname: string, event: any){

  if(pathname === '/api/users/login'){
    const body = await readBody(event); 
    console.log(body);

    const email = import.meta.env.VITE_USER_NAME;
    const password = import.meta.env.VITE_USER_PASSWORD;

    let isMatch = false;
    if(!(body.email === email && body.password === password)) {
      setResponseStatus(event, 400, 'Bad Request');
      return 'Bad Request';
    }

    setCookie(event, LibConfig.COOKIE_AUTH_KEY, body.email);
    return new Response(JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if(pathname === '/api/users/get_user_id'){
    const body = await readBody(event); 
    console.log(body);
    return new Response(JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return null;
} 
