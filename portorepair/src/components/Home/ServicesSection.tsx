import SolucaoCard from './CardServices';
import orcamentoImage from '../../assets/banner-servicos-orcamento.png';
import agendamentoImage from '../../assets/banner-servicos-agendamento.png';
import portoRepairImage from '../../assets/banner-servicos-portorepair.png';

export default function ServicesSection() {
  return (
    <div className="container-servicos">
      <SolucaoCard
        imageSrc={orcamentoImage}
        title="Orçamento Online"
        description="Faça um orçamento certeiro online, realizado de forma automática em poucos minutos utilizando a nossa nova técnologia SeguroRepair, a nossa Inteligência Artificial que irá fazer o seu orçamento e entregar o preço total."
        link="/servicos"
        buttonText="Fazer Orçamento Online"
      />
      <SolucaoCard imageSrc={agendamentoImage}
        title="Agendamento de serviços"
        description="Faça o seu agendamento para as manutenções necessárias na unidade mais próxima!"
        link="/servicos"
        buttonText="Fazer Agendamento"
      />
      <SolucaoCard
        imageSrc={portoRepairImage}
        title="PortoRepair"
        description="Faça um orçamento certeiro online, realizado de forma automática em poucos minutos utilizando a nossa nova tecnologia SeguroRepair, a nossa Inteligência Artificial."
        link="/servicos"
        buttonText="Acessar PortoRepair"
      />
    </div>
  );
};