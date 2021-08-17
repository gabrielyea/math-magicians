import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router basename={process.env.PUBLIC_URL}>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
