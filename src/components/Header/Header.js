import React, { Component } from 'react';

import NavigationItems from './NavigationItems/NavigationItems'
import './Header.scss';
import Logo from '../../assets/header-logo.png';
import ButtonBackground from '../../assets/button-background.png'

class Header extends Component {

    render() {
        return (
            <header className="header">
                <a href="www.google.com">
                    <img className="header-logo" src={Logo} alt="" />
                </a>
                <NavigationItems />
                <span
                    style={{ backgroundImage: `url(${ButtonBackground})` }}
                    className="header-button">DOWNLOAD APP</span>
            </header>
        );
    }
}

export default Header;