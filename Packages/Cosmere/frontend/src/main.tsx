/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './reset.css';
import './index.css';

import { Shell } from './Shell';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Shell />
  </StrictMode>
);
