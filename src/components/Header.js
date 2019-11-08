import React from 'react';

function Header(props) {
  return (
    <header>
      <h1
        style={{ cursor: 'pointer' }}
        onClick={() => window.location.assign('/')}
      >
        David Nyman
      </h1>
      <h3>{props.subtitle}</h3>
    </header>
  );
}

export default Header;
