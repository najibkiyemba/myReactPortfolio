import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5 style={{color: 'darkgray'}}>Hello I'm</h5>
        <h1 style={{color: 'darkgray'}}>Najib Kiyemba</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Move Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;