import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Locality from './pages/Locality';
import { initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago("TEST-fd35b829-6906-4d8c-a5af-e9d26976c69e");

function App() {
  return (
    <Switch>
      <Route exact path="/planos" component={ Plans } />
      <Route exact path="/locais" component={ Locality } />
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}

export default App;
