/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navBar.module.scss';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Qoute',
    },
  ];

  const createLinks = () => {
    return links.map((link) => (
      <li key={link.id}>
        <NavLink
          to={link.path}
          activeClassName="active-link"
          exact
        >
          {link.text}
        </NavLink>
      </li>
    ));
  };

  return (
    <section className={styles.navBar}>
      <h1>Math Magicians</h1>
      <ul>
        {createLinks()}
      </ul>
    </section>
  );
};

export { NavBar as default };
