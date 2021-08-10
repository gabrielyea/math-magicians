import PropTypes from 'prop-types';

export default function CalculatorButton({ number, clickHandler }) {
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
}

CalculatorButton.propTypes = {
  number: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
