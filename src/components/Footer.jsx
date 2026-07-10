import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, HardHat } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              <HardHat className="logo-icon" size={28} />
              <span className="logo-text text-white">BARRANI <span className="logo-accent text-white" style={{opacity: 0.7}}>BÂTIMENT</span></span>
            </Link>
            <p>Entreprise tunisienne spécialisée dans les travaux publics et le bâtiment. Classée en catégorie 3.</p>
            <div className="cert-badges">
              <span className="badge">Catégorie 3 BTP</span>
              <span className="badge">ISO 9001 (En cours)</span>
            </div>
          </div>
          
          {/* Contact */}
          <div className="footer-contact">
            <h3>Siège Social</h3>
            <ul>
              <li>
                <MapPin className="contact-icon" size={20} />
                <span>Rue Abou kacem Echebi, Immeuble Lobna 2éme étage<br/>2100 Gafsa, Tunisie</span>
              </li>
              <li>
                <Phone className="contact-icon" size={20} />
                <span>+216 98 234 917</span>
              </li>
              <li>
                <Mail className="contact-icon" size={20} />
                <span>barranibatiment@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div className="footer-links">
            <h3>Société</h3>
            <ul>
              <li><Link to="/projets">Nos Projets</Link></li>
              <li><Link to="/services">Notre Expertise</Link></li>
              <li><Link to="/hse">Démarche HSE</Link></li>
              <li><Link to="/carrieres">Carrières & Recrutement</Link></li>
              <li><Link to="/documents">Espace Partenaires</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Société BARRANI Bâtiment. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
