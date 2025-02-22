/// <reference types="vinxi/types/client" />
import ReactDOM from "react-dom/client";

import "./style.css";

import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import App from "./App";

createRoot(document.getElementById('root')!).render(
  <App />
);

/*
ReactDOM.createRoot(document.getElementById("root")).render(
	<>
	  <h1 className="text-3xl">React SPA Basic</h1>
	  <hr />
	  <div>hello World , vercel deploy</div>
	</>
);
*/
