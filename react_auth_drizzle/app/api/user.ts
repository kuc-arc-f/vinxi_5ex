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

  if(pathname === '/api/users/create'){
    const body = await readBody(event); 
    console.log(body);
    if (!body.email) {
      setResponseStatus(event, 400, 'Bad Request');
      return 'Bad Request';
    }
    if (!body.password) {
      setResponseStatus(event, 400, 'Bad Request');
      return 'Bad Request';
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);
    console.log("hashedPassword=", hashedPassword);

    const retUser = await db.insert(users).values({
       email: body.email , password: hashedPassword
    }).returning();
    return new Response(JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if(pathname === '/api/users/login'){
    const body = await readBody(event); 
    console.log(body);

    const singleUser = await db
    .select()
    .from(users)
    .where(eq(users.email, body.email))
    .get();
    console.log(singleUser);
    const isMatch = await bcrypt.compare(body.password, singleUser.password);
    if(!isMatch){
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
