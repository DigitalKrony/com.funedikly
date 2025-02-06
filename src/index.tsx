/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Shell } from "./Shell";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Shell />
  </React.StrictMode>
);
