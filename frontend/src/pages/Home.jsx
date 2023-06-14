import { Component } from 'react';
import logoNewpace from '../assets/logo_newpace.png';
import Header from '../components/Header';
import About from '../components/About';
import './Home.css';
import Modality from '../components/Modality';
import HowToJoinUs from '../components/HowToJoin';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="wrapper">
          <div>

            <section className="module parallax parallax-1">
              <img src={ logoNewpace } alt="" />
              <p>
                | Você não precisa ser bom para começar, precisa<strong> começar </strong>para ser bom |
              </p>
            </section>

            <section className="module content">
              <About />
            </section>

            <section className="module parallax parallax-2">
              <h1>MODALIDADES</h1>
              <button className="btn-plans">CONHEÇA OS PLANOS</button>
            </section>

            <section className="module content">
              <HowToJoinUs />
              <Modality />
            </section>

          </div>
        </main>
      </>
    );
  }
}

export default Home;
