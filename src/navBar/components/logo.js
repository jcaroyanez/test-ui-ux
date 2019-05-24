import React from 'react'
import './logo.css';
import Logo from '../../assets/img/logo-dark.svg';
import TextLogo from '../../assets/img/logo-text-dark.svg';
function LogoNav() {
    return (
        <a className="navbar-brand logo-position" href="#">
            <img className="logo" src={Logo} width="30" height="30" />
            <img className="logo-text" src={TextLogo} width="30" height="30" />
        </a>
    )
}

export default LogoNav;

