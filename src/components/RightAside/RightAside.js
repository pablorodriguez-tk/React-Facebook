import React from 'react';
import { Link } from 'react-router-dom';
import anuncio1 from '../../img/anuncio1.jpg';
import anuncio2 from '../../img/anuncio2.jpg';
import persona1 from '../../img/persona1.jpg';
import persona2 from '../../img/persona2.jpg';
import persona3 from '../../img/persona3.jpg';
import persona4 from '../../img/persona4.jpg';
import persona5 from '../../img/persona5.jpg';

const RightAside = () => {
  return (
    <aside className="contactos col-3 col-xl-2">
      <div className="seccion">
        <h3 className="titulo">Publicidad</h3>
        <div className="publicidad">
          <Link to="#">
            <img src={anuncio1} alt="" />
          </Link>
        </div>
        <div className="publicidad">
          <Link to="#">
            <img src={anuncio2} alt="" />
          </Link>
        </div>
      </div>
      <div className="seccion">
        <h3 className="titulo">Contactos</h3>
        <nav>
          <Link to="#" className="perfil">
            <img src={persona1} alt="" />
          </Link>
          <Link to="#" className="perfil">
            <img src={persona2} alt="" />
            Alejandro Doe
          </Link>
          <Link to="#" className="perfil">
            <img src={persona3} alt="" />
            Alejandro Doe
          </Link>
          <Link to="#" className="perfil">
            <img src={persona4} alt="" />
            Alejandro Doe
          </Link>
          <Link to="#" className="perfil">
            <img src={persona5} alt="" />
            Alejandro Doe
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default RightAside;
