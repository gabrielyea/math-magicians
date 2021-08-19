import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import React from 'react';
import Calculator from './components/calculator/Calculator';
import NavBar from './components/navBar/NavBar';
import NotMatch from './pages/NoMatch';
import Quote from './pages/Quote';
import Home from './pages/home/Home';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </Router>
);

export default App;
