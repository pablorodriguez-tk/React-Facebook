import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user, clase, name }) => {
  return (
    <Link to="#" className={clase}>
      <img src={user} alt="" />
      {name}
    </Link>
  );
};

export default User;
