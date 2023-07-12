import { Component } from 'react';
import logoNewpace from '../assets/logo_newpace.png';
import Header from '../components/Header';
import About from '../components/About';
import './Home.css';
import Modality from '../components/Modality';
import HowToJoinUs from '../components/JoinUs';
import CardDepo from '../components/CardDepo';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';
import InternalProvider from '../checktout/ContextProvider';
import Checkout from '../checktout/Checkout';
import Payment from '../checktout/Payment';

const Home = () => {
  const history = useHistory();


  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState({ quantity: "1", price: "10", amount: 10, description: "Some book" });

  const handleClick = () => {
    setIsLoading(true);
    fetch("http://localhost:3001/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      })
  };


  const handleClickPlan = () => {
    history.push('/planos');
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  

    return (
      <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
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
              <Checkout onClick={handleClick} description/>
              <Payment />
            </section>

            <section className="module parallax parallax-2">
              <h1>MODALIDADES</h1>
              <button className="btn-plans" onClick={ handleClickPlan }>CONHEÇA OS PLANOS</button>
            </section>

            <section className="module content">
              <Modality />
              <HowToJoinUs />
              <CardDepo />
            </section>

          </div>
        </main>
        <Footer />
      </>
      </InternalProvider>
    );

}

export default Home;
