import React from 'react';
import './calculatorStyle.scss';
import calculate from '../../logic/calculate';
import CalculatorButton from '../buttons/CalculatorBtn';
import Display from '../display/Display';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array.from(Array(10).keys()).reverse(),
      special: ['AC', '+/-', '%'],
      operators: ['÷', 'x', '-', '+', '='],
      decimalDot: '.',
      currentOp: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true;
    }
    return false;
  }

  clickHandler = (e) => {
    this.setCalculatorResult(e.target.value);
  }

  setCalculatorResult = (value) => {
    const { currentOp } = this.state;
    const results = calculate(currentOp, value);
    this.setState({ currentOp: this.updateCurrentOperation(results) });
  }

  updateCurrentOperation = ({ next, total, operation }) => {
    const { currentOp } = this.state;
    if (total || total === null) {
      currentOp.total = total;
    }
    if (next || next === null) {
      currentOp.next = next;
    }
    if (operation || operation === null) {
      currentOp.operation = operation;
    }
    return currentOp;
  }

  render() {
    const {
      numbers, decimalDot, special, operators, currentOp,
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
        <Display number={currentOp} />
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
