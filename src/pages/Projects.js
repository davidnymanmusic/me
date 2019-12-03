import React from 'react';

import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <div className="content">
        <div className="center">
          <button
            className="project"
            onClick={() =>
              window.open('http://dogeat.herokuapp.com/', '_blank')
            }
          >
            Dog Eat? <br></br>
            <p style={{ fontSize: 18, margin: 0 }}>v2 coming soon!</p>
          </button>
          <button
            className="project"
            onClick={() =>
              window.open(
                'https://davidnymanmusic.github.io/white-noise/#',
                '_blank',
              )
            }
          >
            White Noise
          </button>
          <Link to="/" style={{ textDecoration: 'inherit' }}>
            <button id="site" className="project">
              This Site
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
