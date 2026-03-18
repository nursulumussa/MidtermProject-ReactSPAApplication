import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">Fleur</h1>
        <nav className="nav">
          <a href="#catalog">Каталог</a>
          <a href="#specials">Акции</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contact">Контакты</a>
          <a href="#subscribe">Подписка</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;