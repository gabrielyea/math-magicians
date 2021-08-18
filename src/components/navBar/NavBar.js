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

  const createLinks = () => links.map((link) => (
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

  return (
    <nav className={styles.navBar}>
      <div className="logo"><h1>Math Magicians</h1></div>
      <ul>
        {createLinks()}
      </ul>
    </nav>
  );
};

export { NavBar as default };
