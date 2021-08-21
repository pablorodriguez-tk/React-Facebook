import React from 'react';
import { Link } from 'react-router-dom';

const MenuButton = ({ Icono, link = '#', size, clase }) => {
  return (
    <Link to={link} className={clase}>
      <Icono size={size} />
    </Link>
  );
};

export default MenuButton;
