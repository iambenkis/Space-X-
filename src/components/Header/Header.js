import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>
(<header>
    <nav>
        <ul>
            <li><NavLink to="/">Rockets</NavLink></li>
            <li><NavLink to="/missions">Missions</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
        </ul>
    </nav>
</header>);

export default Header;
