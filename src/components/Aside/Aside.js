import React from 'react';
import AsideFooter from './AsideFooter/AsideFooter';
import AsideMenu from './AsideMenu/AsideMenu';

const Aside = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center justify-content-md-between">
        <aside className="enlaces-rapidos col-3 col-xl-2">
          <AsideMenu />
          <AsideFooter />
        </aside>
      </div>
    </div>
  );
};

export default Aside;
