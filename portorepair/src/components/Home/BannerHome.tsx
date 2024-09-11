import bannerImage from '../../assets/banner-pagina-inicial.png';

export default function Banner() {
  return (
    <div className="container-banner">
      <div className="textos">
        <h1>Soluções para o seu carro na palma da sua mão</h1>
        <p>
          Com poucos cliques você <span>economiza horas</span> do seu dia!
        </p>
      </div>
      <picture>
        <img src={bannerImage} alt="Imagem de um homem dentro do seu carro segurando seu celular." />
      </picture>
    </div>
  );
};