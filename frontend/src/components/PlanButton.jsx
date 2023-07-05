import { Component } from 'react';

class PlanButton extends Component {
  render() {
    const { time } = this.props;

    if (time.equivalent) {
      return (
        <button onClick={ () => {window.location.href = time.link} }>
          <span className="smal-font">equivalent mensalmente a </span>
          <br />
          {time.equivalent}
          <br />
          <span className="smal-font">{` em 6x de ${time.value}`}</span>
          <br />
          PLANO ANUAL
          <br />
          <span className="smal-font">isento de matrícula</span>
        </button>
      );
    }
    return (
      <button onClick={ () => {window.location.href = time.link} }>
        {time.value}
        <br />
        {time.plan}
        <br />
        {
          time.subscription
            ? <span className="smal-font">{`+ ${time.subscription} de matrícula`}</span>
            : <span className="smal-font">isento de matrícula</span>
        }

      </button>
    );
  }
}

export default PlanButton;
