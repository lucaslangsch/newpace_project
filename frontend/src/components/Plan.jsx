import { Component } from "react";
import PlanButton from "./PlanButton";

class Plan extends Component {
  
  render() {
    const { plano } = this.props;
    const { onlineOne } = plano;
    return (
      <div className='card-plan'>
      <div className='title'>
        <h2>ONLINE</h2>
      </div>
      <PlanButton tempo={ onlineOne.mensal }/>
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
    );
  }
}
 
export default Plan;