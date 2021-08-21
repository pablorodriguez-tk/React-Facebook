import React from 'react';
import anuncio1 from '../../img/anuncio1.jpg';
import anuncio2 from '../../img/anuncio2.jpg';
import persona1 from '../../img/persona1.jpg';
import persona2 from '../../img/persona2.jpg';
import persona3 from '../../img/persona3.jpg';
import persona4 from '../../img/persona4.jpg';
import persona5 from '../../img/persona5.jpg';
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
          <User user={persona1} clase="perfil" name="Alejandro Doe" />
          <User user={persona2} clase="perfil" name="Alejandro Doe" />
          <User user={persona3} clase="perfil" name="Alejandro Doe" />
          <User user={persona4} clase="perfil" name="Alejandro Doe" />
          <User user={persona5} clase="perfil" name="Alejandro Doe" />
        </nav>
      </div>
    </aside>
  );
};

export default RightAside;
