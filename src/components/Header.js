import React, { useState, createRef } from 'react';
import ReadingProgress from './ReadingProgress';
import { Link } from 'react-router-dom';
import { peach } from '../constants';

function Header(props) {
  const target = createRef();
  const [progress, setProgress] = useState(0);
  const showProgress = progress => {
    setProgress(Math.ceil(progress));
    props.getProgress(Math.ceil(progress));
  };
  const textSwitch = progress => {
    switch (true) {
      case progress >= 90:
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
        <Link to="/" style={{ textDecoration: 'inherit', color: peach }}>
          <h1 style={{ cursor: 'pointer', display: 'inline-block' }}>
            David Nyman
          </h1>
        </Link>
        <h3 style={{ paddingRight: '1px' }}>{props.subtitle}</h3>
        {props.showProgress ? (
          <ReadingProgress sendProgress={showProgress} target={target}>
            {progress < 8 ? null : textSwitch(progress)}
          </ReadingProgress>
        ) : null}
      </header>
    </div>
  );
}

export default Header;
