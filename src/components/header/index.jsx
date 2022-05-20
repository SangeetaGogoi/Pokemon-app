import React from 'react';
import Banner from "../assets/banner.png";

function Header() {
  return (
    <header className='header-page'>
      <img src={Banner} alt="banner" className="banner" />
    </header>
  )
}

export default Header