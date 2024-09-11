import portoRepairIA from '../../assets/logo-portorepairia2.png';

export default function FAQ() {
  return (
    <div id="perguntas">
      <h2>“Como faço um Orçamento Online?”</h2>
      <h2 id="tab">“Como descubro o problema do meu carro?”</h2>
      <p>
        É muito simples, por meio do nosso ChatBot com Inteligência Artificial, você pode fazer isso em um piscar de olhos!
      </p>
      <p>
        O nosso ChatBot{' '}
        <img src={portoRepairIA} alt="Logo da porto repair ia" /> irá fazer uma série de perguntas, e com essas perguntas
        ele vai chegar em um resultado, trazendo o orçamento, possível problema do carro e lugares para você consertar
        sem nem mesmo ter que sair da sua casa!
      </p>
      <a href="/servicos#login"></a>
    </div>
  );
};