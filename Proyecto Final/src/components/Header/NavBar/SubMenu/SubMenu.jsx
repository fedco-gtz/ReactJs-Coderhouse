import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/SubMenu.css'

const SubMenu = () => {
  return (
    <ul className="submenu">
      <Link className="linkCustom" to="/category/jordan">JORDAN</Link>
      <Link className="linkCustom" to="/category/airMax">AIR MAX</Link>
      <Link className="linkCustom" to="/category/airForce">AIR FORCE</Link>
      <Link className="linkCustomB" to="/category/other">OTRAS COLECCIONES</Link>
      <Link className="linkCustomA" to="/category/other">+ COLECCIONES</Link>
    </ul>
  );
}

export default SubMenu;