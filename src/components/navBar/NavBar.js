import { motion } from 'framer-motion';
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
      text: 'Joke',
    },
  ];

  // const clickHandle = () => {

  // };

  const createLinks = () => links.map((link) => (
    <li key={link.id}>

      <NavLink
        to={link.path}
        className={styles.link}
        activeClassName={styles.active}
        exact
        onClick={link.clickHande}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {link.text}
        </motion.button>
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
