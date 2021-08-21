import React from 'react';
import Publicaciones from './Publicaciones/Publicaciones';
import Publicar from './Publicar/Publicar';

const Main = () => {
  return (
    <main className="col-12 col-sm-10 col-md-6 col-xxl-4">
      <Publicar />
      <Publicaciones />
    </main>
  );
};

export default Main;
