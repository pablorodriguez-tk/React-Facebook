import React from 'react';
import AsideFooter from './AsideFooter/AsideFooter';
import AsideMenu from './AsideMenu/AsideMenu';

const Aside = () => {
  return (
    <aside className="enlaces-rapidos col-3 col-xl-2">
      <AsideMenu />
      <AsideFooter />
    </aside>
  );
};

export default Aside;
