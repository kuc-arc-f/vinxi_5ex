import Head from '../components/Head'

import React from "react";
import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';

function Page() {

  const testProc = async function(){
    try{
      const response = await fetch(`/api/test1?id=1`);
      if (!response.ok) throw new Error("error, /api/test1");
      const data = await response.json();
      console.log(data);

      const postData = {id: 1, name: "name-post123"}
      const resPost = await fetch(`/api/test2`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        }
      );
      if (!resPost.ok) throw new Error("error, /api/hello");
      const dataPost = await resPost.json();
      console.log(dataPost);
    }catch(e){console.error(e)}
 }

  return (
  <>
    <Head />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">test1</h1>
      <hr className="my-2" />
      <button 
      className="btn"
      onClick={()=>testProc()}>[ Test ]</button>
    </div>  
  </>    
  )
}
export default Page;
