import React from 'react';
import './item-menu.css';

function ItemMenu() {
    return (
        <ul className="navbar-nav ml-auto custom-menu">
            <li className="nav-item customer-item">
                <a className="nav-link" href="#">Hiring <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item customer-item">
                <a className="nav-link" href="#">About us <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item customer-item">
                <a className="nav-link" href="#">Our team <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item customer-item">
                <a className="nav-link" href="#">Our work <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item customer-item">
                <a className="nav-link" href="#">Contact us <span className="sr-only">(current)</span></a>
            </li>
        </ul>
    )
}

export default ItemMenu;

