
import { createRoot } from 'react-dom/client'
import "modern-normalize";

import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
