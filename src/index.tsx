/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from './providers/ThemeProvider';

import "./index.css";
import { Shell } from "./Shell";

console.log('This is a WIP, please check back for updates on a regular basis.')

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider>
        <Shell />
      </ThemeProvider>
  </React.StrictMode>
);
