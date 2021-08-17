import React, { useState } from 'react';
import styles from './calculatorStyle.module.scss';
import calculate from '../../logic/calculate';
import CalculatorButton from '../buttons/CalculatorBtn';
import Display from '../display/Display';

const Calculator = () => {
  const [currentOp, setOperation] = useState({ total: 0, next: null, operation: null });
  const [delegate, setDelegate] = useState(0);

  const numberKeys = Array.from(Array(10).keys()).reverse();
  const specialKeys = ['AC', '+/-', '%'];
  const operatorKeys = ['÷', 'x', '-', '+', '='];
  const decimalKey = ['.'];

  const cleanState = () => {
    setOperation({ next: 0, total: null, operation: null });
    setDelegate(0);
  };

  const setCalculatorResult = (value) => {
    const op = currentOp;
    try {
      const results = calculate(op, value);
      setOperation((state) => ({ ...state, ...results }));
    } catch (error) {
      setOperation({ next: 'error', total: null, operation: null });
      setDelegate(1);
    }
  };

  const doFunction = (param) => {
    const delegateFunctions = [setCalculatorResult, cleanState];

    delegateFunctions[delegate](param);
  };

  const clickHandler = (e) => {
    doFunction(e.target.value);
  };

  const createButtons = (buttonCollection) => {
    const btns = buttonCollection.map((num) => (
      <CalculatorButton
        name={`btn-${num}`}
        key={num}
        number={num.toString()}
        clickHandler={clickHandler}
      />
    ));
    return btns;
  };

  return (
    <div className={styles.main}>
      <Display value={currentOp} />
      <ul className={styles.special}>
        {createButtons(specialKeys)}
      </ul>
      <ul className={styles.numbers}>
        {createButtons(numberKeys)}
        {createButtons(decimalKey)}
      </ul>
      <ul className={styles.operator}>
        {createButtons(operatorKeys)}
      </ul>
    </div>
  );
};

export { Calculator as default };
