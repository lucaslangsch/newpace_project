import { Component } from 'react';
import './PlansGrid.css';

class Metod extends Component {
  render() {
    return (
      <section className="grid-plans">
        <div className="title-plan">
          <h2>
            NOSSAS METODOLOGIAS
          </h2>
        </div>
        <div className="card-plan">
          <div className="title">
            <h3>ONLINE</h3>
          </div>
          <p>Planilha semanal individualizada;</p>
          <div className="linha-horizontal" />
          <p>Controle de treino via Trainus;</p>
          <div className="linha-horizontal" />
          <p>Encontro presencial R$ 50,00;</p>
          <div className="linha-horizontal" />
          <p>Alteração de treino até 1x no mês;</p>
          <div className="linha-horizontal" />
          <p>Zonas de treino via percepção de esforço, pace, frequência cardíaca ou potência;</p>
          <div className="linha-horizontal" />
          <p>Atual Training Plan (ATP) para programação dos ciclos de treinos;</p>
          <div className="linha-horizontal" />
          <p>Testes de esforço máximo em campo;</p>
          <div className="linha-horizontal" />
          <p>Contato via whatsapp ou email;</p>
          <div className="linha-horizontal" />
          <p>Descontos com nossos parceiros;</p>
          <div className="linha-horizontal" />
        </div>
        <div className="card-plan">
          <div className="title">
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
