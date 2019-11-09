import React, { useState, createRef } from 'react';
import ReadingProgress from './ReadingProgress';
import { Link } from 'react-router-dom';

function Header(props) {
  const target = createRef();
  const [progress, setProgress] = useState(0);
  const showProgress = progress => {
    setProgress(Math.ceil(progress));
    props.getProgress(Math.ceil(progress));
  };
  const textSwitch = progress => {
    switch (true) {
      case progress >= 100:
        return 'Ancient History';

      case progress >= 80:
        return 'Education';

      case progress >= 0:
        return 'Recent History';

      default:
        return '';
    }
  };

  return (
    <div className="header" ref={target}>
      <header>
        <Link to="/" style={{ all: 'inherit' }}>
          <h1 style={{ cursor: 'pointer' }}>David Nyman</h1>
        </Link>
        <h3>{props.subtitle}</h3>
        {props.showProgress ? (
          <ReadingProgress sendProgress={showProgress} target={target}>
            {textSwitch(progress)}
          </ReadingProgress>
        ) : null}
      </header>
    </div>
  );
}

export default Header;
