interface ServicesCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

export default function CardServices ({ imageSrc, title, description, link, buttonText }: ServicesCardProps) {
  return (
    <div className="card">
      <picture>
        <img src={imageSrc} alt={`Imagem representando ${title}`} />
      </picture>
      <div className="lado-direito">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>
          <p className="botao-servicos">{buttonText}</p>
        </a>
      </div>
    </div>
  );
};