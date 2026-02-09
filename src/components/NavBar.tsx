
import { useState } from 'react';
import Logo from '../assets/modrinho.png'
import '../styles/Nav.css';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return ( 
    <nav className='menu'>
      <div>
        <img src={Logo} alt="Logo do site" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      <ul className={`menubar ${menuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>X</button>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;