import { Route, Switch } from 'react-router-dom';
import Calculator from '../components/calculator/Calculator';
import NavBar from '../components/navBar/NavBar';
import NotMatch from './NoMatch';
import Quote from './Quote';
import './pages.scss';

const Home = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <div className="home">
          <h2>Welcome</h2>
          <p>
            Occaecat quis anim duis occaecat nostrud dolore consequat anim.
            Elit amet fugiat id nulla mollit.
            Quis labore fugiat reprehenderit aliquip consectetur deserunt qui amet nostrud.
          </p>
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
