import persona1 from '../img/persona1.jpg';
import persona2 from '../img/persona2.jpg';
import persona3 from '../img/persona3.jpg';
import persona4 from '../img/persona4.jpg';
import persona5 from '../img/persona5.jpg';
import paisaje1 from '../img/paisaje1.jpg';
import paisaje2 from '../img/paisaje2.jpg';

export const database = [
  {
    nombre: 'Jorge Diaz',
    foto: persona1,
    posts: {
      hora: 1,
      texto: 'Lorem ipsum dolor sit amet, consectetur adip',
      like: 60,
      comentarios: 7,
      imagen: paisaje1,
    },
  },
  {
    nombre: 'Pablo Rodriguez',
    foto: persona2,
    posts: {
      hora: 1,
      texto: 'Lorem ipsum dolor sit amet, consectetur adip',
      like: 14,
      comentarios: 2,
      imagen: paisaje2,
    },
  },
  {
    nombre: 'Alejandra Maglieti',
    foto: persona3,
    posts: {
      hora: 1,
      texto: 'Lorem ipsum dolor sit amet, consectetur adip',
      like: 124,
      comentarios: 2,
      imagen: paisaje1,
    },
  },
  {
    nombre: 'Nahuel Ortiz',
    foto: persona4,
    posts: {
      hora: 1,
      texto: 'Lorem ipsum dolor sit amet, consectetur adip',
      like: 653,
      comentarios: 535,
      imagen: paisaje2,
    },
  },
  {
    nombre: 'Carla Aguirre',
    foto: persona5,
    posts: {
      hora: 1,
      texto: 'Lorem ipsum dolor sit amet, consectetur adip',
      like: 0,
      comentarios: 0,
      imagen: paisaje1,
    },
  },
];
