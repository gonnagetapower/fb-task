import React from 'react';
import head from './Header.module.css';
import Navigation from '../Navigation/Navigation';
const Header = () => {
  return (
    <div className={head.header}>
        <Navigation />
    </div>
  );
}

export default Header;
