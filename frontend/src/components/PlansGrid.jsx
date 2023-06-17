import { Component } from 'react';
import './PlansGrid.css';

class PlansGrid extends Component {
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
          {/* botões para direcionar ao checkout */}
          <button>
            R$ 130,00
            <br/>
            PLANO MENSAL
            <br/>
            <span className='smal-font'>+ R$ 25,00 de matrícula</span>
          </button>
          <button>
            3x R$ 120,00
            <br/>
            PLANO TRIMESTRAL
            <br/>
            <span className='smal-font'>+ R$ 25,00 de matrícula</span>
          </button>
          <button>
            6X R$ 110,00
            <br/>
            PLANO SEMESTRAL
            <br/>
            <span className='smal-font'>isento de matrícula</span>
          </button>
          <button>
            <span className='smal-font'>equivalente a </span>
            <br/>
            R$ 85,00
            <br/>
            <span className='smal-font'> em 6x de R$ 170,00</span>
            <br/>
            PLANO ANUAL
            <br/>
            <span className='smal-font'>isento de matrícula</span>
          </button>
        </div>
        <div className='card-plan'>
          <div className='title'>
            <h3>PRESENCIAL</h3>
          </div>
          {/* botões para direcionar ao checkout */}
          <button>
            R$ 150,00
            <br/>
            PLANO MENSAL
            <br/>
            <span className='smal-font'>+ R$ 25,00 de matrícula</span>
          </button>
          <button>
            3x R$ 140,00
            <br/>
            PLANO TRIMESTRAL
            <br/>
            <span className='smal-font'>+ R$ 25,00 de matrícula</span>
          </button>
          <button>
            6X R$ 125,00
            <br/>
            PLANO SEMESTRAL
            <br/>
            <span className='smal-font'>isento de matrícula</span>
          </button>
          <button>
            <span className='smal-font'>equivalente a </span>
            <br/>
            R$ 98,00
            <br/>
            <span className='smal-font'> em 6x de R$ 196,00</span>
            <br/>
            PLANO ANUAL
            <br/>
            <span className='smal-font'>isento de matrícula</span>
          </button>
        </div>
      </section>
    );
  }
}
 
export default PlansGrid;