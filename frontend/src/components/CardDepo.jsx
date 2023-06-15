import React, { Component } from 'react';
import './CardDepo.css';
import Slider from 'react-slick';
import depo from '../assets/bike_01.jpg';
import depo2 from '../assets/run_11.jpg';
import depo3 from '../assets/run_03.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={ className }
      style={ { ...style, display: 'none' } }
    />
  );
}

class CardDepo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      cssEase: 'linear',
    };

    return (
      <div className="slider">
        <h2>O QUE NOSSOS <span className="strong">ATLETAS</span> FALAM:</h2>
        <Slider { ...settings }>
          <div className="card-slider">

            <div className="container-2">
              <img src={ depo } alt="" />
              <div>
                <h2>Nome do Atleta</h2>
                <p className="container-depo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi perferendis saepe quas labore dolor deserunt sapiente numquam ratione, veniam reprehenderit eaque. Labore incidunt nesciunt mollitia a hic libero quos fugiat?</p>
              </div>
            </div>
          </div>
          <div className="card-slider">

            <div className="container-2">
              <img src={ depo3 } alt="" />
              <div>
                <h2>Nome do Atleta 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi perferendis saepe quas labore dolor deserunt sapiente numquam ratione, veniam reprehenderit eaque. Labore incidunt nesciunt mollitia a hic libero quos fugiat?</p>
              </div>
            </div>
          </div>
          <div className="card-slider">

            <div className="container-2">
              <img src={ depo2 } alt="" />
              <div>
                <h2>Nome do Atleta 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi perferendis saepe quas labore dolor deserunt sapiente numquam ratione, veniam reprehenderit eaque. Labore incidunt nesciunt mollitia a hic libero quos fugiat?</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CardDepo;
