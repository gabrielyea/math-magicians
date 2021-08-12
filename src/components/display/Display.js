/* eslint-disable react/prop-types */
import './displayStyle.scss';
// import PropTypes from 'prop-types';
import React from 'react';

const Display = (props) => {
  const { value } = props;

  const setDisplay = () => {
    if (value.next) {
      return value.next;
    }
    if (value.total) {
      return value.total;
    }
    return 0;
  };

  const result = setDisplay();

  return (
    <div
      className="display-container"
      value={result}
    >
      {result}
    </div>
  );
};

// Display.propTypes = {
//   next: PropTypes.string,
//   total: PropTypes.string,
// };

// Display.defaultProps = {
//   next: '',
//   total: '',
// };

export default Display;
