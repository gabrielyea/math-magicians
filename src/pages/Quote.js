/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import './pages.scss';
import React, { useState, useEffect } from 'react';
import { access } from '../api/api-access';
import routes from '../api/api-routes';

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
  );
};

export { Qoute as default };
