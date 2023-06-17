import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Plans from './pages/Plans';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/planos" component={ Plans } />
    </Switch>
  );
}

export default App;
