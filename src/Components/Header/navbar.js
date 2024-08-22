import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/schedule">Agendar Paseo</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;