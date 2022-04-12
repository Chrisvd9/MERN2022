import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthorForm from './components/AuthorForm';
import Main from './views/Main';
import Update from './views/Update';

function App() {
  return (
    <div className='App'>
      <h1>Autores favoritos</h1>
      <Router>
        <Switch>
          <Route path='/edit/:id'>
            <Update />
          </Route>
          <Route path='/new'>
            <AuthorForm />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
