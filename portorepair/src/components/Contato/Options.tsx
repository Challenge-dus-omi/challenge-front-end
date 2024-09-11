import bannerContato from '../../assets/banner-contato.png';

export default function Options() {
  return (
    <div className="banner-contato">
    <div className="textos-contato">
        <h1>
        Precisa de ajuda?
        <br />
        Tem alguma dúvida?
        <br />
        Temos uma equipe para te ajudar!
        </h1>
        <p>
        Entre em contato por <span>e-mail</span> ou <span>chat ao vivo</span> com nossos especialistas!
        </p>
        <nav>
        <ul>
            <li>
            <a href="mailto:portorepair.ia@gmail.com?subject=Olá!,%20poderia%20me%20ajudar?&body=Olá,%20preciso%20de%20ajuda%20com:&cc=gabrielmarquesprofissional2005@gmail.com">
                portorepair.ia@gmail.com
            </a>
            </li>
            <li>
            <a href="/servicos#log">Atendimento Chat ao vivo</a>
            </li>
        </ul>
        </nav>
    </div>
    <picture>
        <img
        src={bannerContato}
        alt="Banner da página contato, onde tem uma moça com um fone de ouvido mexendo em seu computador"
        />
    </picture>
    </div>
  );
};