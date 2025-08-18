import './Footer.css';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: 'bi-facebook', url: '#' },
    { name: 'Twitter', icon: 'bi-twitter', url: '#' },
    { name: 'Instagram', icon: 'bi-instagram', url: '#' },
    { name: 'YouTube', icon: 'bi-youtube', url: '#' }
  ];

  return (
    <footer className="vintage-footer">
      <div className="footer-container">
        <div className="footer-info">
          <p className="footer-text">© 2024 HackFlix. Todos los derechos reservados.</p>
          <p className="footer-subtitle">Tu destino para películas clásicas</p>
        </div>
        <div className="social-section">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="social-link"
              title={social.name}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}