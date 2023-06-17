import React, { useEffect, useState } from 'react';
import './Header.css';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
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
    <header className={ `${headerOpacity ? 'scrolled' : ''} header` }>
      <img src={ logo } alt="" />
      <nav className="header-nav">
        <a href='/'>INÍCIO</a>
        <a href='/planos'>PLANOS</a>
        <a target="_blank" href='https://www.instagram.com/newpaceassessoria/'><AiOutlineInstagram /></a>
        <a><AiOutlineWhatsApp /></a>
      </nav>
    </header>
  );
}

export default Header;
