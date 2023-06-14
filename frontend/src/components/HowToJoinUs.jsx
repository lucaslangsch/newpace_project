import { Component } from 'react';
import './HowToJoinUs.css';

class HowToJoinUs extends Component {
  render() {
    return (
      <section className="container">
        <div className="step-container">
          <h2>COMO ENTRAR PARA A <span className="strong">NEWPACE:</span></h2>
          <div className="step-1">
            <h3>ESCOLHA SUA MODALIDADE</h3>
            <p>Corrida</p>
            <p>Ciclismo</p>
            <p>Natação</p>
            <p>Duatlo</p>
            <p>Triatlo</p>
          </div>
          <h2 className="arrow">&gt;</h2>
          <div>
            <h3>METODOLOGIA</h3>
            <p>Online</p>
            <p>Presencial</p>
          </div>
          <h2>&gt;</h2>
          <div>
            <h3>DURAÇÃO</h3>
            <p>Mensal</p>
            <p>Trimestral</p>
            <p>Semestral</p>
            <p>Anual</p>
          </div>
          <h2>&gt;</h2>
          <div>
            <h3>PAGAMENTO</h3>
            <p>Crédito</p>
            <p>Boleto</p>
            <p>Transferência</p>
          </div>
        </div>
      </section>
    );
  }
}

export default HowToJoinUs;
