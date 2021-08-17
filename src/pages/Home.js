import { Route, Switch } from 'react-router-dom';
import Calculator from '../components/calculator/Calculator';
import NavBar from '../components/navBar/NavBar';
import NotMatch from './NoMatch';
import Quote from './Quote';

const Home = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <div className="container">
          <div className="inner">
            <p>
              Occaecat quis anim duis occaecat nostrud dolore consequat anim.
              Elit amet fugiat id nulla mollit.
              Quis labore fugiat reprehenderit aliquip consectetur deserunt qui amet nostrud.
            </p>
          </div>
        </div>
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/qoute">
        <Calculator />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </>
);

export { Home as default };
