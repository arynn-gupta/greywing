import React from 'react';
import './footer.style.scss';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

import Music from './music.component';

const Footer = () => (
  <div className='footer'>
    <div className='logo'>
      <img src={logo} alt='logo' />
    </div>
    <div className='languages'>
      <div className='english'>EN</div>
      <div className='french'>FR</div>
    </div>
    <Music />
    <Link to="/" className='return'>
      return to <span>Greywin.com</span>
    </Link>
  </div>
);

export default Footer;
