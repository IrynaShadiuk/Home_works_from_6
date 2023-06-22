import React from 'react';
import './header.scss'
import { Link, useLocation} from 'react-router-dom'
import { useRoute } from '../_shared/hooks/useRoute';
import { useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import { useContext } from 'react';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext) as any;
    console.log("context");

    const [state, setState] = useState(false);

    const handleChange = () => {
        setState(!state);
    }
    
    return (
        <header className={`header ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <h1 className="header__title">LOGO</h1>
        <nav>
          <ul className="header__menu">
            <li className="header__menu-link">
              <Link className={useRoute('/') ? 'active' : ''} to="/">
                Home
              </Link>
            </li>
            <li className="header__menu-link">
              <Link className={useRoute('/users') ? 'active' : ''} to="/users">
                Users
              </Link>
            </li>
            <li className="header__menu-link">
              <Link className={useRoute('/ticket') ? 'active' : ''} to="/ticket">
                Tickets
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p>{theme}</p>
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        </div>
      </header>
    );
  };
  

export default Header;