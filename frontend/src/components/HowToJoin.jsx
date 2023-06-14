import { Component } from 'react';

import './HowToJoin.css';

class HowToJoin extends Component {
  render() {
    return (
      <section className="container">

        <div className="step-container">
          <h2>COMO ENTRAR PARA A <span className="strong">NEWPACE:</span></h2>
          <div className="pre-stpe">
            <div className="rect" />
            <h3>Corrida</h3>
            <p>Ciclismo</p>
            <p>Natação</p>
            <p>Duatlo</p>
            <p>Triatlo</p>
          </div>
          <div className="pre-stpe">
            <div className="rect-1" />
            <p>Online</p>
            <p>Presencial</p>
          </div>
          <div className="pre-stpe">
            <div className="rect-2" />
            <p>Mensal</p>
            <p>Trimestral</p>
            <p>Semestral</p>
            <p>Anual</p>
          </div>
        </div>
      </section>
    );
  }
}

export default HowToJoin;
