import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Projects = props => {
  const [show, setshow] = useState(false);

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
          <Link to="/">
            <button
              className="project"
              onMouseEnter={() => setshow(true)}
              onMouseLeave={() => setshow(false)}
            >
              {show ? (
                <>
                  <FaArrowUp />
                  <FaArrowUp />
                </>
              ) : (
                <>
                  <FaArrowDown />
                  <FaArrowDown />
                </>
              )}
              <br></br>
              This Site
              {show ? (
                <>
                  <FaArrowDown />
                  <FaArrowDown />
                </>
              ) : (
                <>
                  <FaArrowUp />
                  <FaArrowUp />
                </>
              )}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
