import PropTypes from 'prop-types';
import React from 'react';
// export default  CalculatorButton({ number, clickHandler }) {
//   return (
//     <button
//       className={`btn-${number}`}
//       onClick={clickHandler}
//       type="button"
//       value={number}
//     >
//       {number}
//     </button>
//   );
// }

// eslint-disable-next-line react/prefer-stateless-function
export default class CalculatorButton extends React.Component {
  render() {
    const { number, clickHandler } = this.props;
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
}

CalculatorButton.propTypes = {
  number: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
