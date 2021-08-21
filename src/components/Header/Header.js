import React from 'react';
import Menu from './Menu/Menu';
import LogoAndSearchbar from './LogoAndSearchbar/LogoAndSearchbar';
const Header = () => {
  return (
    <header className="fixed-top">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          {/* Logo y barra de busqueda */}
          <LogoAndSearchbar />
          {/* Menu */}
          <Menu />
          {/* Botones */}
          <div className="col-2"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
