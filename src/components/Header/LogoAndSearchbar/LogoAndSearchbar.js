import React from 'react';
import { BootstrapFill, Search } from 'react-bootstrap-icons';
import MenuButton from '../../MenuButton/MenuButton';

const LogoAndSearchbar = () => {
  return (
    <div className="col col-lg-3 col-xl-2 d-flex align-items-center order-1 order-lg-1">
      <MenuButton Icono={BootstrapFill} link="#" clase="logo me-2" />
      <div className="barra-busqueda d-none d-sm-block">
        <div className="icono">
          <Search />
        </div>
        <input type="search" placeholder="Buscar" />
      </div>
    </div>
  );
};

export default LogoAndSearchbar;
