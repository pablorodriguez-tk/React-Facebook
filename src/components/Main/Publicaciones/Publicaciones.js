import React from 'react';
import Publicacion from '../Publicacion/Publicacion';
import { database } from '../../../database/database';

const Publicaciones = () => {
  return (
    <div className="publicaciones">
      {database.map((user) => (
        <Publicacion
          user={user.foto}
          name={user.nombre}
          time={user.posts.hora}
          text={user.posts.texto}
          like={user.posts.like}
          comments={user.posts.comentarios}
          image={user.posts.imagen}
        />
      ))}
    </div>
  );
};

export default Publicaciones;
