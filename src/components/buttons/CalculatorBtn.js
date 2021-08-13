import PropTypes from 'prop-types';
import React from 'react';

const CalculatorButton = (props) => {
  const { number, clickHandler } = props;
  return (
    <button
      className={`btn-${number}`}
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
  clickHandler: PropTypes.func.isRequired,
};

export { CalculatorButton as default };
