import React from 'react';
import Fade from 'react-reveal/Fade';
import { peach, isMobile } from '../constants';

import { GoMarkGithub } from 'react-icons/go';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const size = isMobile()
  ? { height: 30, width: 30, padding: '0 24px' }
  : { height: 70, width: 70, padding: '0 20px' };
const icons = [
  {
    icon: <GoMarkGithub className="icon" style={size} />,
    text: 'GitHub',
    link: 'https://github.com/davidnymanmusic',
  },
  {
    icon: <FaTwitter className="icon" style={size} />,
    text: 'Twitter',
    link: 'https://twitter.com/davidnyman',
  },
  {
    icon: <FaLinkedin className="icon" style={size} />,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/david-nyman-music/',
  },
];

const Statement = () => {
  return (
    <div>
      <div className="statement">
        <Fade delay={90}>
          <h1>
            {' '}
            <span style={{ color: peach, fontWeight: 900 }}>></span> Hello, I'm
            a{' '}
            <span
              onClick={() => window.location.replace('/projects')}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              className="link"
            >
              web developer
            </span>
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
              className="link"
            >
              music composer
            </span>
          </h1>
        </Fade>
        <Fade delay={600}>
          <h1>
            {' '}
            <span style={{ color: peach, fontWeight: 900 }}>></span> and ready
            to{' '}
            <span
              onClick={() => window.location.replace('/resume')}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              className="link"
            >
              collaborate.
            </span>
          </h1>
        </Fade>
      </div>
      <div className="content-icon">
        <div className="center icon-group">
          {icons.map((i, index) => (
            <div
              key={index}
              className="icon"
              onClick={() => window.open(i.link, '_blank')}
            >
              {i.icon}
              {<p>{i.text}</p>}
            </div>
          ))}
        </div>
        ;
      </div>
    </div>
  );
};

export default Statement;
