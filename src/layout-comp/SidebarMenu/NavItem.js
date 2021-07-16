import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavItem({name, route, onClick}) {
  return (
    <li style={{paddingLeft: 0}}>
      <NavLink
        onClick={onClick}
        to={route}>
        {name}
      </NavLink>
    </li>
  );
}
