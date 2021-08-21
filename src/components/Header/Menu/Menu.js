import React from 'react';
import {
  HouseDoorFill,
  Flag,
  PlayBtn,
  ShopWindow,
  People,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu col-6 text-center">
      <Link className="active">
        <HouseDoorFill size={25} />
      </Link>

      <Link>
        <Flag size={25} />
      </Link>

      <Link>
        <PlayBtn size={25} />
      </Link>

      <Link>
        <ShopWindow size={25} />
      </Link>

      <Link>
        <People size={25} />
      </Link>
    </div>
  );
};

export default Menu;
