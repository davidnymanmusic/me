import React from 'react';
import ReadingProgress from './ReadingProgress';

function Header(props) {
  const target = React.createRef();
  return (
    <div className="header" ref={target}>
      <header>
        <h1
          style={{ cursor: 'pointer' }}
          onClick={() => window.location.assign('/')}
        >
          David Nyman
        </h1>
        <h3>{props.subtitle}</h3>
        <ReadingProgress target={target}></ReadingProgress>
      </header>
    </div>
  );
}

export default Header;
