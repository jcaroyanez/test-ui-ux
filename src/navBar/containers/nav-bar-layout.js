import React, { Component } from 'react';
import './nav-bar-layout.css';
import Logo from '../components/logo';
import ItemMenu from '../components/item-menu';
import TogglerButton from '../components/toggler-button';

class NavbarLayout extends Component {
    state = { isShow: false };

    /*hide and show responsive menu*/
    changeValue = () => {
        this.setState({ isShow: !this.state.isShow })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top customer-nav">
               <Logo />
                <TogglerButton
                    changeValue={this.changeValue}
                />
                <div className={this.state.isShow ? 'collapse navbar-collapse show-menu' : 'collapse navbar-collapse hide'} id="navbarSupportedContent">
                    <ItemMenu />
                </div>
            </nav>
        )
    }
}

export default NavbarLayout;
