import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BASE_URL is '/' locally and '/THE-POLAR-TRENDS/' on GitHub Pages,
        set once in vite.config.js. Without it every route 404s on Pages,
        because the router would look for /products/... at the domain root. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
