import React from 'react';
import {
  HouseDoorFill,
  Flag,
  PlayBtn,
  ShopWindow,
  People,
} from 'react-bootstrap-icons';
import MenuButton from '../../MenuButton/MenuButton';

const Menu = () => {
  return (
    <div className="menu col-12 col-lg-6 col-xl-6 text-center order-3 order-lg-2">
      <MenuButton Icono={HouseDoorFill} size={25} clase="active" />
      <MenuButton Icono={Flag} size={25} />
      <MenuButton Icono={PlayBtn} size={25} />
      <MenuButton Icono={ShopWindow} size={25} />
      <MenuButton Icono={People} size={25} />
    </div>
  );
};

export default Menu;
