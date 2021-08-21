import { motion, useCycle } from 'framer-motion';
import React from 'react';
import styles from './mobileMenu.module.scss';
import MenuItem from '../menuItem/MenuItem';

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
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

  const sidebar = {
    open: {
      clipPath: 'circle(1000px at 40px 40px)',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      opacity: 0,
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const createLinks = () => links.map((link) => (
    <MenuItem
      i={link.id}
      key={link.id}
      to={link.path}
      text={link.text}
      toggleMenu={() => toggleOpen()}
    />
  ));

  return (
    <div className={styles.mobileMenu}>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.mobileBtn}
          type="button"
          onClick={() => toggleOpen()}
        >
          { isOpen && <p className={styles.open}>Close</p>}
          { !isOpen && <p className={styles.close}>Menu</p>}
        </motion.button>
        <motion.div
          className={styles.background}
          variants={sidebar}
        >
          <motion.ul variants={variants}>
            { createLinks() }
          </motion.ul>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default MobileMenu;
