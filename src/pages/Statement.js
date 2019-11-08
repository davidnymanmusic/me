import React from 'react';
import Fade from 'react-reveal/Fade';
import { peach } from '../constants';
const Statement = () => {
  return (
    <div>
      <div className="statement">
        <Fade delay={90}>
          <h1>
            {' '}
            <span style={{ color: peach, fontWeight: 900 }}>></span> Hello, I'm
            a <span style={{ textDecoration: 'underline' }}>web developer</span>
          </h1>
        </Fade>
        <Fade delay={300}>
          <h1>
            {' '}
            <span style={{ color: peach, fontWeight: 900 }}>> </span>
            <span
              onClick={() =>
                window.open('https://www.davidnymanmusic.com', '_blank')
              }
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              music composer
            </span>
          </h1>
        </Fade>
        <Fade delay={600}>
          <h1>
            {' '}
            <span style={{ color: peach, fontWeight: 900 }}>></span> and ready
            to <span style={{ textDecoration: 'underline' }}>collaborate.</span>
          </h1>
        </Fade>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Statement;
