/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import styles from './displayStyle.module.scss';

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
      className={styles.container}
      value={result}
    >
      {result}
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.objectOf(PropTypes.any),
};

Display.defaultProps = {
  value: '',
};

export default Display;
