import LibConfig from './LibConfig';

const LibAuth = {
  /**
   *
   * @param key: any
   *
   * @return
   */ 
  validLogin: async function(): Promise<any>
  {
    try {
    } catch (e) {
      console.error(e);
    }
  },
  
  /**
   *
   * @param
   *
   * @return
   */
  getUserId: function(): any
  {
    try {
      let ret = null;
      return 1;
/*
      const key = LibConfig.COOKIE_KEY_USER;
      const auth = LibCookie.get_cookie(key);
      if(!auth) {
        throw new Error('Error , user cookie nothing.');
      } 
      ret = Number(auth); 
      return ret;    
*/
    } catch (e) {
      console.error(e);
    }
  },  
  /**
   * getUser:
   * @param
   *
   * @return
   */  
  getUser: async function(): Promise<any>
  {
    try {
      let ret = null;
      const user = await LibDbSession.get(LibConfig.SESSION_KEY_USER);
console.log(user);
      if(user === null) {
        return ret;
      }
      return user;
    } catch (e) {
      console.error(e);
    }
  },
}
export default LibAuth;
