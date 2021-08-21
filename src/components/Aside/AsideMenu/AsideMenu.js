import React from 'react';
import {
  BagFill,
  CalendarEventFill,
  CollectionFill,
  FlagFill,
  PeopleFill,
  TvFill,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Persona2 from '../../../img/persona2.jpg';

const AsideMenu = () => {
  return (
    <nav>
      <Link to="#" className="perfil">
        <img src={Persona2} alt="" />
        Pablo Rodriguez
      </Link>
      <Link to="#">
        <div className="icono">
          <PeopleFill size={20} />
        </div>
        Amigos
      </Link>
      <Link to="#">
        <div className="icono">
          <FlagFill size={20} />
        </div>
        Páginas
      </Link>
      <Link to="#">
        <div className="icono">
          <CollectionFill size={20} />
        </div>
        Grupos
      </Link>
      <Link to="#">
        <div className="icono">
          <BagFill size={20} />
        </div>
        Marketplace
      </Link>
      <Link to="#">
        <div className="icono">
          <TvFill size={20} />
        </div>
        Watch
      </Link>
      <Link to="#">
        <div className="icono">
          <CalendarEventFill />
        </div>
        Eventos
      </Link>
    </nav>
  );
};

export default AsideMenu;
