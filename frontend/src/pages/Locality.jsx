import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import './Locality.css';

const estreito = {
  lat: -27.583389,
  lng: -48.577234
};

const carvoeira = {
  lat: -27.604065,
  lng: -48.518490
};

const jurere = {
  lat: -27.436677,
  lng: -48.505060
};

class Locality extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="wrapper">
          <section className="module parallax parallax-4">
            <h1>LOCAIS DE TREINO</h1>
            <p>
              | Conheça nossa agenda de treinos em grupo |
            </p>
          </section>
          <section className="grid-plans">
          <div className="title-plan">
            <h2>
              TERÇAS E QUINTAS
            </h2>
            <p><strong>Estreito</strong></p>
            <p>Beira-Mar Continental</p>
            <p>7:00 - 8:00</p>
            <p>Corrida</p>
            <div className='container-map'>
              <Map location={estreito}/>
            </div>
          </div>
          <div className="title-plan">
            <h2>
              QUARTAS
            </h2>
            <p><strong>Carvoeira</strong></p>
            <p>Pista de Atletismo UFSC</p>
            <p>6:00 - 7:00</p>
            <p>Corrida</p>
            <div className='container-map'>
              <Map location={carvoeira}/>
            </div>
          </div>
          <div className="title-plan">
            <h2>
              SAB/DOM/FERIADO
            </h2>
            <p><strong>Jurerê</strong></p>
            <p>Praia de Jurerê</p>
            <p>6:00 - 9:00</p>
            <p>Multiesporte</p>
            <div className='container-map'>
              <Map location={jurere}/>
            </div>
            <p><strong>OBS:</strong> Os treinos nos finais de semana são itinerantes e não fixos e podem ocorrer dentro da ilha como em outras cidades, também podem variar entre sábado ou domingo</p>
          </div>
        </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Locality;
