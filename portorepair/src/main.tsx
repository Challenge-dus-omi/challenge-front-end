import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'; 
import './css/reset.css';
import './css/contato.css';
import './css/index.css';
import './css/servicos.css';
import './css/sobre.css';
import './css/layout.css';
import './css/requestImage.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
