import { Component } from 'react';
import './PlansGrid.css';

class Metod extends Component {
  render() {
    return (
      <section className='grid-plans'>
        <div className='title-plan'>
          <h3>
            UMA MODALIDE, ESCOLHA ENTRE
            <span className='strong'> CORRIDA,</span>
            &nbsp;
            <span className='strong'>CICLISMO,</span>
            &nbsp;
            <span className='strong'>NATAÇÃO</span>
            &nbsp;
            OU
            &nbsp;
            <span className='strong'>MUSCULAÇÃO:</span>
          </h3>
        </div>
        <div className='card-plan'>
          <div className='title'>
            <h3>ONLINE</h3>
          </div>
          <p>Planilha semanal individualizada;</p>
          <div className="linha-horizontal"></div>
          <p>Controle de treino via Trainus;</p>
          <div className="linha-horizontal"></div>
          <p>Encontro presencial R$ 50,00;</p>
          <div className="linha-horizontal"></div>
          <p>Alteração de treino até 1x no mês;</p>
          <div className="linha-horizontal"></div>
          <p>Zonas de treino via percepção de esforço, pace, frequência cardíaca ou potência;</p>
          <div className="linha-horizontal"></div>
          <p>Atual Training Plan (ATP) para programação dos ciclos de treinos;</p>
          <div className="linha-horizontal"></div>
          <p>Testes de esforço máximo em campo;</p>
          <div className="linha-horizontal"></div>
          <p>Contato via whatsapp ou email;</p>
          <div className="linha-horizontal"></div>
          <p>Descontos com nossos parceiros;</p>
          <div className="linha-horizontal"></div>
        </div>
        <div className='card-plan'>
          <div className='title'>
            <h3>PRESENCIAL</h3>
          </div>
          <p>Planilha semanal individualizada;</p>
          <p>Controle de treino via Training Peaks;</p>
          <p>Até 4 encontros semanais;</p>
          <p>Alteração de treino até 2x no mês;</p>
          <p>Zonas de treino via percepção de esforço, pace, frequência cardíaca ou potência;</p>
          <p>Atual Training Plan (ATP) para programação dos ciclos de treinos;</p>
          <p>Testes de esforço máximo em campo;</p>
          <p>Contato via whatsapp ou email;</p>
          <p>Descontos com nossos parceiros;</p>
        </div>
      </section>
    );
  }
}
 
export default Metod;