import React from 'react';
import { BellFill, ChatFill, GridFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Persona2 from '../../../img/persona2.jpg';

const MenuSecundary = () => {
  return (
    <nav className="botones col-2 text-end d-flex align-items-center justify-content-end">
      <Link to="#" className="perfil">
        <img src={Persona2} alt="" /> Carlos
      </Link>
      <Link to="#">
        <GridFill />
      </Link>
      <Link to="#">
        <ChatFill />
      </Link>
      <Link to="#">
        <BellFill />
      </Link>
    </nav>
  );
};

export default MenuSecundary;
