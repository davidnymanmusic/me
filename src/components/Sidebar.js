import React, { useEffect, useState, useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { peach } from '../constants';
import { useToggle } from '../hooks/useToggle';

export const SideBar = props => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume/' },
    { name: 'Projects', path: '/projects/' },
    { name: 'Contact', path: '/contact/' },
  ];

  const [path, setPath] = useState(props.pathName);
  const [open, setOpen] = useToggle(false);

  useEffect(() => {}, [path, props.pathName]);
  const handlePath = link => {
    setPath(link.path);
    props.title(link.name);
  };

  const handleOpen = state => {
    if (state.isOpen) handleHandleOpen();
  };
  const handleHandleOpen = () => {
    setOpen();
  };

  return (
    <Menu
      isOpen={open}
      onStateChange={state => handleOpen(state)}
      customBurgerIcon={<FiArrowLeft color={peach}></FiArrowLeft>}
      {...props}
    >
      <div className="nav">
        {links.map((link, i) => {
          return (
            <NavLink
              key={i}
              onClick={() => {
                handlePath(link);
                handleHandleOpen();
              }}
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
