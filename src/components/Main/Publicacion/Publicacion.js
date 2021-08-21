import React from 'react';
import User from '../../User/User';
import { Link } from 'react-router-dom';
import { ChatLeft, HandThumbsUp, HeartFill } from 'react-bootstrap-icons';

const Publicacion = ({ user, name, time, text, like, comments, image }) => {
  return (
    <div className="publicacion">
      <div className="header">
        <User user={user} clase="foto" />
        <div className="datos">
          <Link to="#" className="nombre">
            {name}
          </Link>
          <Link to="#" className="hora">
            {time}hr
          </Link>
        </div>
      </div>
      <div className="body">
        <p>{text}</p>
        <img src={image} alt="" />
      </div>
      <div className="comentarios d-flex justify-content-between">
        <div className="me-gusta d-flex justify-content-start align-items-center">
          <HeartFill />
          <span>{like}</span>
        </div>
        <Link to="#">{comments} Comentarios</Link>
      </div>
      <div className="botones d-flex">
        <button className="me-gusta">
          <HandThumbsUp />
          Me gusta
        </button>
        <button className="me-gusta">
          <ChatLeft />
          Comentarios
        </button>
      </div>
    </div>
  );
};

export default Publicacion;
