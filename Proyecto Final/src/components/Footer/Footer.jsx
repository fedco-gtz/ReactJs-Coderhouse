import React from 'react';
import '../../styles/Footer.css'
import OfficialStore from './OfficialStore/OfficialStore';
import logo from '../../images/logo.png';
import facebook from '../../images/Facebook.png';
import instagram from '../../images/Instagram.png';


function Footer() {
    return (
        <>
            <OfficialStore />
            <footer className='footer'>
                <section className='footerSection'>
                    <img className='logo' src={logo} alt="Logo ZapaTienda" width="40%" height="40%" />
                </section>

                <section className='socialNetwork'>
                    <a href="https://www.facebook.com/federico.g.gutierrez2" target="_blank"><img className='socialIcon' alt='Facebook' src={facebook} /></a>&nbsp;&nbsp;&nbsp;
                    <a href="https://www.instagram.com/grrz.fede/" target="_blank"><img className='socialIcon' alt='Instagram' src={instagram} /></a>
                </section>

                <section className='footerSection'>
                    <p><i></i>Contacto: <a href="mailto:info@zapatienda.com">info@zapatienda.com</a></p>
                    <p className='copy'>&copy; copyright 2024 - Federico G. Gutierrez</p>
                </section>
            </footer>
        </>
    );
}

export default Footer;

