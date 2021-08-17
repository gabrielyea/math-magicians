/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import React from 'react';
import styles from './navBar.module.scss';

const NavBar = () => {
  return (
    <section className={styles.navBar}>
      <h1>Math Magicians</h1>
      <ul>
        <li><a href="#section">Home</a></li>
        <li><a href="#section">Calculator</a></li>
        <li><a href="#section">Quote</a></li>
      </ul>
    </section>
  );
};

export { NavBar as default };
