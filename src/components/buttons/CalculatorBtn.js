/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './buttonStyle.module.scss';

const CalculatorButton = (props) => {
  const {
    number, clickHandler, name,
  } = props;

  return (
    <motion.button
      className={styles[name]}
      onClick={clickHandler}
      value={number}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {number}
    </motion.button>
  );
};

CalculatorButton.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export { CalculatorButton as default };
