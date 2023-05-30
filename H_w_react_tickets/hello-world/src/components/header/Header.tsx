import React from 'react';
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">LOGO</h1>
            <nav>
                <ul className="header__menu">
                    <li className="header__menu-link">
                        <a href="#">Users</a>
                    </li>
                    <li className="header__menu-link">
                        <a href="#">Tickets</a>
                    </li>
                    <li className="header__menu-link">
                        <a href="#">Admin</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;