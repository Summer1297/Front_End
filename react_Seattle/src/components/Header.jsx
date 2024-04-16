import React from 'react';
import NavBar from './NavBar';
import DropdownMenu from './DropdownMenu';
import '../assets/css/Header.css';

function Header({ setPage }) {
  
  return (
    <div className="header-container">
      
      <div className="background-image"></div>
      <DropdownMenu />
      <NavBar setPage={setPage} />
    </div>
  );
}

export default Header;
