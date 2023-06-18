import { Component } from "react";

class PlanButton extends Component {
  render() { 
    const { tempo } = this.props;
    return (
      <button>
      {tempo.valor}
      <br/>
      {tempo.plano}
      <br/>
      <span className='smal-font'>{`+ ${tempo.matricula} de matrícula`}</span>
    </button>
    );
  }
}
 
export default PlanButton;