/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import './pages.scss';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { access } from '../api/api-access';
import routes from '../api/api-routes';
import variants from '../components/animations/AnimationVariants';

const Qoute = () => {
  const [joke, setJoke] = useState();

  useEffect(() => {
    const getStatus = async () => {
      let response = await access.getApi(routes.MAIN);
      const { punchline, setup } = response[0];
      setJoke({ punchline, setup });
    };
    getStatus();
  }, []);

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
      <div className="quote">
        {joke && (
        <div>
          <p>
            {joke.setup}
          </p>
          <p>
            {joke.punchline}
          </p>
        </div>
        )}
      </div>
    </motion.div>
  );
};

export { Qoute as default };
