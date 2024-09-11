import { useState } from 'react';
import menuHamburguerIcon from '../../assets/menu-hamburguer.png';
import homeIcon from '../../assets/casa-icone.png';

export default function MenuComponent() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container-menu">
      <div className="botao-hamburguer" onClick={toggleMenu}>
        <picture>
          <img src={menuHamburguerIcon} alt="Menu Hamburguer" />
        </picture>
      </div>
      
      <nav className={`menu ${isMenuOpen ? 'visible' : 'hidden'}`}>
        <ul>
          <li className="inicial botoes-menu">
            <a href="./index.html">
              <img src={homeIcon} alt="Ícone de casa" />
            </a>
          </li>
          <li className="linha botoes-menu">
            <a href="./paginas/servicos.html">
              <p>Serviços</p>
            </a>
          </li>
          <li className="linha botoes-menu">
            <a href="./paginas/contato.html">
              <p>Contato</p>
            </a>
          </li>
          <li className="botoes-menu">
            <a href="./paginas/sobre.html">
              <p>Sobre</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
