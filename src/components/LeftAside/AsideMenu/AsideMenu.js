import React from 'react';
import {
  BagFill,
  CalendarEventFill,
  CollectionFill,
  FlagFill,
  PeopleFill,
  TvFill,
} from 'react-bootstrap-icons';
import { database } from '../../../database/database';
import MenuItem from '../../MenuItem/MenuItem';
import User from '../../User/User';

const AsideMenu = () => {
  return (
    <nav>
      <User user={database[1].foto} clase="perfil" name={database[1].nombre} />
      <MenuItem Icono={PeopleFill} etiqueta="Amigos" size={20} link="#" />
      <MenuItem Icono={FlagFill} etiqueta="Páginas" size={20} link="#" />
      <MenuItem Icono={CollectionFill} etiqueta="Grupos" size={20} link="#" />
      <MenuItem Icono={BagFill} etiqueta="Marketplace" size={20} link="#" />
      <MenuItem Icono={TvFill} etiqueta="Watch" size={20} link="#" />
      <MenuItem
        Icono={CalendarEventFill}
        etiqueta="Eventos"
        size={20}
        link="#"
      />
    </nav>
  );
};

export default AsideMenu;
