import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ Icono, etiqueta, size, link = '#' }) => {
  return (
    <Link to={link}>
      <div className="icono">
        <Icono size={size} />
      </div>
      {etiqueta}
    </Link>
  );
};

export default MenuItem;
