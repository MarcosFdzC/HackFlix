import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    { name: 'HOME', icon: 'bi-house-door' },
    { name: 'MOVIES', icon: 'bi-film' },
    { name: 'GENRES', icon: 'bi-collection' },
    { name: 'CONTACT', icon: 'bi-telephone' }
  ];

  return (
    <header className="vintage-header">
      <div className="header-container">
        {/* Logo/Título */}
        <div className="logo-section">
          <h1 className="vintage-logo">HackFlix</h1>
        </div>

        {/* Navegación horizontal */}
        <nav className="nav-menu">
          {menuItems.map((item, index) => (
            <button key={index} className="nav-item vintage-btn">
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>


      </div>
    </header>
  );
}
