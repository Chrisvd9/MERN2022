import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Hello from './views/Hello';
import For4 from './views/For4';
import HelloBlueRed from './views/HelloBlueRed';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/4">The number</Link>
            </li>
            <li>
              <Link to="/hello">Hello</Link>
            </li>
            <li>
              <Link to="/blue/red">Hello blue and red</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/hello">
            <Hello></Hello>
          </Route>
          <Route path="/4">
            <For4></For4>
          </Route>
          <Route path="/blue/red">
            <HelloBlueRed></HelloBlueRed>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
