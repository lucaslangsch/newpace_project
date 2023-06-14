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
      <a>
        <img src={ logo } alt="" />
      </a>
      <nav className="header-nav">
        <a>INÍCIO</a>
        <a>PLANOS</a>
        <a><AiOutlineInstagram /></a>
        <a><AiOutlineWhatsApp /></a>
      </nav>
    </header>
  );
}

export default Header;
