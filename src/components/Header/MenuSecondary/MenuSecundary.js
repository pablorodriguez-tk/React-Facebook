import React from 'react';
import { BellFill, ChatFill, GridFill } from 'react-bootstrap-icons';
import { database } from '../../../database/database';
import MenuButton from '../../MenuButton/MenuButton';
import User from '../../User/User';

const MenuSecundary = () => {
  return (
    <nav className="botones col-auto col-lg-3 col-xl-2 text-end d-flex align-items-center justify-content-end order-2 order-lg-3">
      <User user={database[1].foto} clase="perfil" name={database[1].nombre} />
      <MenuButton Icono={GridFill} link="#" />
      <MenuButton Icono={ChatFill} link="#" />
      <MenuButton Icono={BellFill} link="#" />
    </nav>
  );
};

export default MenuSecundary;
