import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    { name: 'Series', icon: 'bi-tv' },
    { name: 'Películas', icon: 'bi-film' },
    { name: 'Documentales', icon: 'bi-camera-reels' },
    { name: 'Kids', icon: 'bi-balloon-heart' }
  ];

  return (
    <header className="vintage-header">
      <div className="header-container">
        {/* Botón de Inicio */}
        <div className="home-section">
          <button className="home-btn vintage-btn">
            <i className="bi bi-house-door"></i>
            <span>Inicio</span>
          </button>
        </div>

        {/* Menú Desplegable */}
        <div className="menu-section">
          <div className="dropdown-container">
            <button
              className="dropdown-toggle vintage-btn"
              onClick={toggleDropdown}
            >
              <span>Categorías</span>
              <i className={`bi bi-chevron-down dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}></i>
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu vintage-dropdown">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className="dropdown-item vintage-dropdown-item"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Logo/Título */}
        <div className="logo-section">
          <h1 className="vintage-logo">HackFlix</h1>
        </div>
      </div>
    </header>
  );
}
