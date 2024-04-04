import React from 'react';
import logo from '../resources/assets/images/staxer-black.png';
// import { TfiWorld } from "react-icons/tfi";
import '../styles/header.css'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <img src={logo} alt="Staxer logo" className='logo-navbar'/>
      <h1>Onboarding</h1>
      &nbsp;
    </header>
  );
};

export default Header;
