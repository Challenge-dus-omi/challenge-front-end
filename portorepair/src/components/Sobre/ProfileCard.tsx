import linkedinIcon from '../../assets/linkedlin-icone.png';
import githubIcon from '../../assets/github-icone.png';
import whatsappIcon from '../../assets/whatsapp-icone.png';
interface SobreCardProps {
    imageSrc: string;
    altText: string;
    description: string;
    linkedinUrl: string;
    githubUrl: string;
    whatsappUrl: string;
}

export default function ProfileCard({imageSrc, altText, description, linkedinUrl, githubUrl, whatsappUrl}: SobreCardProps) {
  return (
    <div className="card">
      <picture>
        <img src={imageSrc} alt={altText} />
      </picture>
      <div className="lado-direito">
        <p>{description}</p>
        <nav className="redes-sociais">
          <ul>
            <li>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Ícone do LinkedIn" />
              </a>
            </li>
            <li>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="Ícone do GitHub" />
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="Ícone do WhatsApp" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
