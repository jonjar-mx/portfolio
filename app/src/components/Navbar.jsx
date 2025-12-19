
import { useState } from 'react';
import './Navbar.css';
import useTheme from '../hooks/useTheme.js'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/" className="logo-link">
            <span className="logo-text">Jonathan</span>
            <span className="logo-highlight">Jara</span>
          </a>
        </div>

        {/* Menu para desktop */}
        <div className="nav-menu-desktop">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
          <button className="nav-button" onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
	  </button>
        </div>

        {/* Botón hamburguesa para mobile */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>

        {/* Menu móvil */}
        <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="mobile-nav-button" onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
