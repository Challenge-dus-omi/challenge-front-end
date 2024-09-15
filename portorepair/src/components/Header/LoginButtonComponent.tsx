import { Link } from 'react-router-dom';
import portoLogo from '/logo-porto.png';

export default function LoginButtonComponent() {
  return (
    <div className="container-botao-log">
      <Link to="/servicos">
        <div className="log">
          <picture>
            <img src={portoLogo} alt="Logo Porto Seguro" />
          </picture>
          <p>Fazer orçamento</p>
        </div>
      </Link>
    </div>
  );
}
 