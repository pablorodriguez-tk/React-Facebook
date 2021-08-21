import React from 'react';
import { Link } from 'react-router-dom';

const AsideFooter = () => {
  return (
    <footer>
      <nav className="d-flex flex-wrap">
        <Link to="#">Privacidad</Link>
        <Link to="#">Condiciones</Link>
        <Link to="#">Publicidad</Link>
        <Link to="#">Opciones de anuncios</Link>
        <Link to="#">Cookies</Link>
        <Link to="#">Más</Link>
      </nav>
    </footer>
  );
};

export default AsideFooter;
