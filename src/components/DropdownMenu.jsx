import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/DropdownMenu.css';

const DropdownMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleBodyClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleBodyClick);

    return () => {
      document.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <div className="dropdown-menu" ref={dropdownRef}>
      <button className="dropdown-button" onClick={handleMenuToggle}>
        Menu
      </button>
      {isMenuOpen && (
        <ul className="dropdown-list">
          <li><a href="/">Home</a></li>
          <li><a href="https://github.com">Github</a></li>
          <li><a href="https://linkedin.com">Linkedin</a></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
