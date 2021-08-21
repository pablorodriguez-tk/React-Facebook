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
    <div className="menu col-12 col-lg-6 col-xl-6 text-center order-3 order-lg-2">
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
