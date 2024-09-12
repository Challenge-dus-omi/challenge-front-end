import ProfileCard from './ProfileCard';

import FotoLima from '../../assets/foto-lima.png';
import FotoMarques from '../../assets/foto-marques.png';
import FotoCaua from '../../assets/foto-caua.png';

export default function AboutSection() {
  return (
    <main>
      <div className="container">
        <ProfileCard
          imageSrc={FotoLima}
          altText="Foto de Gabriel Lima"
          description="Meu nome é Gabriel Lima, tenho 18 anos e estou estudando Análise e Desenvolvimento de sistemas na FIAP! Amo o mundo da tecnologia e da programação, e a forma como elas crescem me deixa mais empolgado para crescer nesse universo! Busco sempre melhorar as minhas habilidades e conhecimento para que eu esteja sempre atualizado de tudo que faz o nosso mundo girar atualmente!"
          linkedinUrl="https://www.linkedin.com/in/gabriel-lima-silvaa/"
          githubUrl="https://github.com/Byells"
          whatsappUrl="https://wa.me/5511963598097"
        />
        <ProfileCard
          imageSrc={FotoMarques}
          altText="Foto de Gabriel Marques"
          description="Me chamo Gabriel Marques, estudante de ADS na FIAP. Apaixonado por tecnologia desde muito cedo, tendo conhecimento sobre diversas áreas do meio, gosto de ler, estudar e tocar bateria. Em busca de oportunidades, busco melhorar cada dia mais estudando sobre diversos assuntos."
          linkedinUrl="https://www.linkedin.com/in/gabriel-marques-lima/"
          githubUrl="https://github.com/GabrielMarquesLima"
          whatsappUrl="https://wa.me/5511995960356"
        />
        <ProfileCard
          imageSrc={FotoCaua}
          altText="Foto de Cauã"
          description="Olá, me chamo Cauã, sou um estudante de Análise e Desenvolvimento de Sistemas na FIAP, comprometido em explorar o dinâmico e desafiador universo da tecnologia e das ciências exatas. Com apenas 18 anos, estou imerso em uma jornada de aprendizado constante, buscando expandir meus conhecimentos e habilidades."
          linkedinUrl="https://www.linkedin.com/in/cau%C3%A3-marcelo-machado-93b8a5263/"
          githubUrl="https://github.com/CauaMachad0"
          whatsappUrl="https://wa.me/5511954482637"
        />
      </div>
    </main>
  );
};