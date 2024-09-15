import { useState } from 'react';
import menuHamburguerIcon from '../../assets/menu-hamburguer.png';
import homeIcon from '../../assets/casa-icone.png';
import { Link } from 'react-router-dom';

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
            <Link to="/">
              <img src={homeIcon} alt="Ícone de casa" />
            </Link>
          </li>
          <li className="linha botoes-menu">
            <Link to="servicos">
              <p>Serviços</p>
            </Link>
          </li>
          <li className="linha botoes-menu">
            <Link to="/contato">
              <p>Contato</p>
            </Link>
          </li>
          <li className="botoes-menu">
            <Link to="/sobre">
              <p>Sobre</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
