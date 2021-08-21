import React from 'react';
import { BootstrapFill, Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const LogoAndSearchbar = () => {
  return (
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
  );
};

export default LogoAndSearchbar;
