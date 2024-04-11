import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext';

const root = document.getElementById('root');

const app = (
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);

ReactDOM.createRoot(root).render(app);
