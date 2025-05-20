import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import RootContext from './compoments/context/RootContext.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RootContext>
      <App />
    </RootContext>
  </BrowserRouter>
);
