import React from 'react';
import './calculatorStyle.scss';
import CalculatorButton from './buttons/CalculatorBtn';
import Display from './display/Display';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '0',
      numbers: Array.from(Array(10).keys()).reverse(),
      special: ['AC', '+/-', '%'],
      operators: ['/', '*', '-', '+', '='],
      decimalDot: '.',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    this.setState({ currentValue: e.target.value });
  }

  render() {
    const {
      numbers, decimalDot, special, operators, currentValue,
    } = this.state;
    const numBtns = numbers.map((num) => (
      <CalculatorButton
        key={num}
        number={num.toString()}
        clickHandler={this.clickHandler}
      />
    ));
    const specialBtns = special.map((btn) => (
      <CalculatorButton
        key={btn}
        number={btn.toString()}
        clickHandler={this.clickHandler}
      />
    ));
    const operatorBtns = operators.map((btn) => (
      <CalculatorButton
        key={btn}
        number={btn.toString()}
        clickHandler={this.clickHandler}
      />
    ));
    return (
      <div className="main-container">
        <Display number={currentValue} />
        <ul className="special-container">
          {specialBtns}
        </ul>
        <ul className="numbers-container">
          {numBtns}
          <CalculatorButton
            className="dot-btn"
            type="button"
            clickHandler={this.clickHandler}
            number={decimalDot}
          />
        </ul>
        <ul className="operator-container">
          {operatorBtns}
        </ul>
      </div>
    );
  }
}
