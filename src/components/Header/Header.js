import React from 'react';
import { NavLink } from 'react-router-dom';
import SpaceXImage from '../../assets/images/planet.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <a href="/" className="logo">
      <img src={SpaceXImage} className="logo-image" alt="Space Traveler's Hub" />
      Space Traveler&apos;s Hub
    </a>
    <nav className="nav">
      <ul className="unorderList">
        <li className="list"><NavLink to="/rockets" className={({ isActive }) => `link ${(isActive ? 'active' : '')}`} end>Rockets</NavLink></li>
        <li className="list"><NavLink className={({ isActive }) => `link ${(isActive ? 'active' : '')}`} to="/missions">Missions</NavLink></li>
        <li className="list"><NavLink className={({ isActive }) => `link ${(isActive ? 'active' : '')}`} to="/profile">Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
