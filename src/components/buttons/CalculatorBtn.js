/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import styles from './buttonStyle.module.scss';

const CalculatorButton = (props) => {
  const {
    number, clickHandler, name,
  } = props;

  return (
    <button
      className={styles[name]}
      onClick={clickHandler}
      type="button"
      value={number}
    >
      {number}
    </button>
  );
};

CalculatorButton.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export { CalculatorButton as default };
