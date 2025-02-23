/// <reference types="vinxi/types/client" />
import ReactDOM from "react-dom/client";
import "./style.css";

import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";
import startProc from "./utils/startProc";
startProc.start();

createRoot(document.getElementById('root')!).render(
  <App />
);

