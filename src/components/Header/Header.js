import React from 'react';
import { Link } from 'react-router-dom';
import { BootstrapFill, Search } from 'react-bootstrap-icons';
const Header = () => {
  return (
    <header className="fixed-top">
      <div className="container-fluid">
        <div className="row">
          {/* Logo y barra de busqueda */}
          <div className="col-2 d-flex align-items-center">
            <Link to="#" className="logo me-2">
              <BootstrapFill />
            </Link>
            <div className="barra-busqueda">
              <div className="icono">
                <Search />
              </div>
              <input type="search" placeholder="Buscar" />
            </div>
          </div>

          {/* Menu */}
          <div className="col-6"></div>

          {/* Botones */}
          <div className="col-2"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
