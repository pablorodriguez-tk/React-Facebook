import React from 'react';
import { Link } from 'react-router-dom';

const Ads = ({ imagen }) => {
  return (
    <div className="publicidad">
      <Link to="#">
        <img src={imagen} alt="" />
      </Link>
    </div>
  );
};

export default Ads;
