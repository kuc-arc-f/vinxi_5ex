

import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './client/home';
import About from './client/about';
import Signup from './client/signup';
import Login from './client/Login';
import Todo from './client/todo';
import Todo11 from './client/todo11';
import Test1 from './client/test1';

export default function App(){
  return(
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo11" element={<Todo11 />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}
