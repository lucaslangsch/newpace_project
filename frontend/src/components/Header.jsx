import React, { useEffect, useState } from 'react';
import './Header.css';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../assets/logo_np.png';

function Header() {
  const [headerOpacity, setHeaderOpacity] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setHeaderOpacity(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className={ `${headerOpacity ? 'scrolled' : ''} header` }>
      <img src={ logo } alt="" />
      <nav className="header-nav">
        <button className='btn-display-mobile'>MENU</button>
        <ul className='menu-desktop'>

        <Link to="/">INÍCIO</Link>
        <Link to="/planos" >PLANOS</Link>
        <Link to="/locais">LOCAIS DE TREINO</Link>
        <a target="_blank" href="https://www.instagram.com/newpaceassessoria/" rel="me"><AiOutlineInstagram /></a>
        <a target="_blank" href="https://wa.me/5548999408873?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20Newpace" rel="me"><AiOutlineWhatsApp /></a>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
