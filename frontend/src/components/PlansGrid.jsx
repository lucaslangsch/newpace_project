import { Component } from 'react';
import './PlansGrid.css';
import Plan from './Plan';
import oneSport from '../helpers/plans.js';
import Metod from './Metod';

class PlansGrid extends Component {
  render() {
    return (
      <>
        <Metod />
        <section className="grid-plans">
          <div className="title-plan">
            <h2>
              UMA MODALIDE APÓS A COMPRA VOCÊ DEFINE ENTRE
              <span className="strong"> CORRIDA,</span>
              &nbsp;
              <span className="strong">CICLISMO,</span>
              &nbsp;
              <span className="strong">NATAÇÃO</span>
              &nbsp;
              OU
              &nbsp;
              <span className="strong"> MUSCULAÇÃO:</span>
            </h2>
          </div>
          <Plan plan={ oneSport.online } method="ONLINE" />
          <Plan plan={ oneSport.presential } method="PRESENCIAL" />
        </section>
        
        <section className="grid-plans">
          <div className="title-plan">
            <h2>
              DUAS MODALIDADES APÓS A COMPRA VOCÊ ESCOLHE QUAIS DESEJA NO SEU
              &nbsp;
              <span className="strong">DUATLO</span>
            </h2>
          </div>
          <Plan plan={ oneSport.online } method="ONLINE" />
          <Plan plan={ oneSport.presential } method="PRESENCIAL" />
        </section>
        
        <section className="grid-plans">
          <div className="title-plan">
            <h2>
              TRÊS MODALIDES
            </h2>
          </div>
          <Plan plan={ oneSport.online } method="ONLINE" />
          <Plan plan={ oneSport.presential } method="PRESENCIAL" />
        </section>
      </>
    );
  }
}

export default PlansGrid;
