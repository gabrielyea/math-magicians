/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Calculator from './components/calculator/Calculator';
import NavBar from './components/navBar/NavBar';
import NotMatch from './pages/NoMatch';
import Quote from './pages/Quote';
import Home from './pages/home/Home';

const App = () => {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence exitBeforeEnter initial="false">
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </>
  );
};

export default App;
