import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Plans from './pages/Plans';

function App() {
  return (
    <Switch>
      <Route exact path="/planos" component={ Plans } />
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default App;
