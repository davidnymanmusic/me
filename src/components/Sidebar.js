import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import { peach } from '../constants';

const SideBar = props => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume/' },
    { name: 'Projects', path: '/projects/' },
    { name: 'Contact', path: '/contact/' },
  ];

  const [path, setPath] = useState(props.pathName);
  useEffect(() => {}, [path, props.pathName]);
  const handlePath = link => {
    setPath(link.path);
    props.title(link.name);
  };

  return (
    <Menu customBurgerIcon={<FiMenu color={peach}></FiMenu>} {...props}>
      <div className="nav">
        {links.map((link, i) => {
          return (
            <NavLink
              key={i}
              onClick={() => handlePath(link)}
              activeClassName="selected-link"
              to={link.path}
              exact={link.path === '/' ? true : false}
            >
              {link.name}{' '}
              {path === link.path ? (
                <span className="blinking-cursor">|</span>
              ) : null}
            </NavLink>
          );
        })}
      </div>
    </Menu>
  );
};
export default SideBar;
