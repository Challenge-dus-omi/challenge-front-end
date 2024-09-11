import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importando o BrowserRouter para roteamento
import App from './App.tsx'; // Importando o componente principal
import './css/reset.css';
import './css/contato.css';
import './css/index.css';
import './css/servicos.css';
import './css/sobre.css';
import './css/layout.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Envolvendo o App com o BrowserRouter para fornecer o contexto de roteamento */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
