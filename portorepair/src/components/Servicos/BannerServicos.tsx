import carroImage from '../../assets/carro-servicos.png';

export default function BannerServicos() {
  return (
    <div className="container-banner">
      <div className="banner">
        <div className="textos">
          <h1>Solucione o seu problema em um piscar de olhos!</h1>
          <p>
            Com poucos cliques você <span>economiza horas</span> do seu dia!
          </p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/servicos#perguntas">
                <p>Como faço um orçamento online?</p>
              </a>
            </li>
            <li>
              <a href="/servicos#perguntas">
                <p>Como funciona o PortoRepair IA?</p>
              </a>
            </li>
            <li>
              <a href="/servicos#perguntas">
                <p>Como faço um agendamento online?</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="carro">
        <picture>
          <img src={carroImage} alt="Imagem de um carro branco" />
        </picture>
      </div>
    </div>
  );
};