import React from 'react';
import { CameraVideoFill, EmojiSmileFill, Images } from 'react-bootstrap-icons';
import MenuItem from '../../MenuItem/MenuItem';
import User from '../../User/User';
import { database } from '../../../database/database';

const Publicar = () => {
  return (
    <div className="publicar">
      <div className="formulario">
        <User user={database[1].foto} clase="foto" />
        <input type="text" placeholder="Que estas pensando?" />
      </div>
      <hr />
      <div className="botones d-flex">
        <MenuItem Icono={CameraVideoFill} etiqueta="Video" />
        <MenuItem Icono={Images} etiqueta="Foto" />
        <MenuItem Icono={EmojiSmileFill} etiqueta="Sentimiento" />
      </div>
    </div>
  );
};

export default Publicar;
