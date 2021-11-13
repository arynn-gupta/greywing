import React from 'react';
import './header.style.scss';
import PageMenu from '../component/page_menu.component';
import MainMenu from '../component/main_menu.component';

const Header = () => (
  <div className='header'>
    <MainMenu />
    <PageMenu />
  </div>
);

export default Header;
