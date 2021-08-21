import React from 'react';
import Menu from './Menu/Menu';
import LogoAndSearchbar from './LogoAndSearchbar/LogoAndSearchbar';
import MenuSecundary from './MenuSecondary/MenuSecundary';
const Header = () => {
  return (
    <header className="fixed-top">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <LogoAndSearchbar />
          <Menu />
          <MenuSecundary />
        </div>
      </div>
    </header>
  );
};

export default Header;
