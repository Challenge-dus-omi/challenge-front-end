import logoPortoRepairBranco from '../../assets/logo-portorepair-branco.png';
import logoPortoRepairIA from '../../assets/logo-portorepairia-branco.png';
import iconeWhatsApp from '../../assets/icone-whatsapp.png';
import iconeInstagram from '../../assets/icone-instagram.png';
import iconeTwitter from '../../assets/icone-twitter.png';
import carroRedes from '../../assets/carro-redes.png';

const RedesSociais = () => {
  return (
    <div className="container-redes">
      <div className="parte-cima">
        <img src={logoPortoRepairBranco} alt="Logo porto repair" />
        <h3>#Pag<span>Repair</span></h3>
        <img src={logoPortoRepairIA} alt="Logo porto repair ia" />
      </div>
      <h2>Nos siga nas redes sociais!</h2>
      <nav>
        <ul>
          <li id="whatsapp">
            <a href="https://chat.whatsapp.com/IhIdJjEexc039myKNNe4H9" target="_blank" rel="noopener noreferrer">
              <img src={iconeWhatsApp} alt="Ícone da rede social WhatsApp" />
              <p>WhatsApp</p>
            </a>
          </li>
          <li id="instagram">
            <a href="/em-breve">
              <img src={iconeInstagram} alt="Ícone da rede social Instagram" />
              <p>Instagram</p>
            </a>
          </li>
          <li id="twitter">
            <a href="/em-breve">
              <img src={iconeTwitter} alt="Ícone da rede social Twitter" />
              <p>Twitter</p>
            </a>
          </li>
        </ul>
      </nav>
      <picture>
        <img src={carroRedes} alt="Imagem de um carro visto de cima." />
      </picture>
    </div>
  );
};

export default RedesSociais;
