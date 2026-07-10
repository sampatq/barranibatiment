import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HardHat } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <Link to="/" className="logo">
          <HardHat className="logo-icon" size={28} />
          <span className="logo-text">BARRANI <span className="logo-accent">BÂTIMENT</span></span>
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
          <Link to="/projets" className={`nav-link ${location.pathname === '/projets' ? 'active' : ''}`}>Projets</Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Expertise</Link>
          <Link to="/hse" className={`nav-link ${location.pathname === '/hse' ? 'active' : ''}`}>HSE</Link>
          <Link to="/equipements" className={`nav-link ${location.pathname === '/equipements' ? 'active' : ''}`}>Équipements</Link>
          <Link to="/carrieres" className={`nav-link ${location.pathname === '/carrieres' ? 'active' : ''}`}>Carrières</Link>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <Link to="/" className="mobile-link">Accueil</Link>
          <Link to="/projets" className="mobile-link">Projets</Link>
          <Link to="/services" className="mobile-link">Expertise</Link>
          <Link to="/hse" className="mobile-link">HSE</Link>
          <Link to="/equipements" className="mobile-link">Équipements</Link>
          <Link to="/carrieres" className="mobile-link">Carrières</Link>
          <Link to="/documents" className="mobile-link">Espace Téléchargement</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
