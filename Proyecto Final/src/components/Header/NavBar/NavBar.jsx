import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/NavBar.css'
import CartWidget from './CartWidget/CartWidget'
import SubMenu from './SubMenu/SubMenu';

function NavBar() {
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    return (
        <>
            <nav className='navbar'>
                <ul>

                    <Link className="linkCustom" to="/">HOME</Link>
                    <Link to="/category" onClick={toggleSubmenu} className={`linkCustom ${submenuOpen ? 'active' : ''}`}>COLECCIONES{submenuOpen}&nbsp;{submenuOpen ? '▲' : '▼'}</Link>
                    <Link className="linkCustom" to="/myOrders">MIS PEDIDOS</Link>
                    <Link className="cartWidget" to="/cart"><CartWidget /></Link>
                </ul>
            </nav>
            {submenuOpen && <SubMenu />}

        </>
    );
}

export default NavBar;
