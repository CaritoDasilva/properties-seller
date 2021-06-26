import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './views/Dashboard';
import NewProperty from './views/NewProperty';
import DetailProperty from './views/DetailProperty';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">Agregar Propiedad</Link>
            </li>
            <li>
              <Link to="/details/:id">Ver Propiedad</Link>
            </li>
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
          </ul>
        </nav>        
        <Switch>         
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/new">
            <NewProperty/>
          </Route>
          <Route exact path="/details/:id">
            <DetailProperty/>
          </Route>
          <Route exact path="/new/:id">
            <NewProperty/>
          </Route>
          {/* <Route exact path="/login">
            <Login/>
          </Route> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;