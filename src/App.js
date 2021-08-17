import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Home />
  </Router>
);

export default App;
