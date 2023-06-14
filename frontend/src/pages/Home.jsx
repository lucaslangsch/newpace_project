import { Component } from 'react';
import logoNewpace from '../assets/logo_newpace.png';
import logoTri from '../assets/logo_tri.png';
import logoBike from '../assets/logo_bike.png';
import logoRun from '../assets/logo_run.png';
import logoSwim from '../assets/logo_swim.png';
import Header from '../components/Header';
import About from '../components/About';
import './Home.css'

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
              <About/>
            </section>

            <section className="module parallax parallax-2">
              <h1>Modalidades</h1>
              <button className="btn-plans">CONHEÇA OS PLANOS</button>
            </section>
            <section className="module content">
              <div className="container-modal">
                <div className="modal">
                  <div className="modal-image to-up swim">

                    <img src={ logoSwim } alt="" />
                  </div>
                  <div className="modal-image bike">
                    <img src={ logoBike } alt="" />

                  </div>
                  <div className="modal-image to-up run">

                    <img src={ logoRun } alt="" />
                  </div>
                  <div className="modal-image tri">

                    <img src={ logoTri } alt="" />
                  </div>
                </div>
              </div>

            </section>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
