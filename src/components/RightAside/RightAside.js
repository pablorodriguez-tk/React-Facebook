import React from 'react';
import { database } from '../../database/database';
import anuncio1 from '../../img/anuncio1.jpg';
import anuncio2 from '../../img/anuncio2.jpg';
import Ads from '../Ads/Ads';
import User from '../User/User';

const RightAside = () => {
  return (
    <aside className="contactos col-3 col-xl-2">
      <div className="seccion">
        <h3 className="titulo">Publicidad</h3>
        <Ads imagen={anuncio1} />
        <Ads imagen={anuncio2} />
      </div>
      <div className="seccion">
        <h3 className="titulo">Contactos</h3>
        <nav>
          {database.map((user) => (
            <User user={user.foto} clase="perfil" name={user.nombre} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default RightAside;
