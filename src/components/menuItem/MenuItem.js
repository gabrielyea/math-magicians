/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from './menuItem.module.scss';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem = ({
  i, to, text, toggleMenu,
}) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      key={i}
      variants={variants}
    >
      <NavLink
        to={to}
        exact
      >
        <motion.button
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className={styles.btn}
          style={style}
        >
          {text}
        </motion.button>
      </NavLink>
    </motion.li>
  );
};

export default MenuItem;
