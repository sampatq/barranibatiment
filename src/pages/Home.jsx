import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Building2, HardHat, ShieldCheck, Clock } from 'lucide-react';
import Map from '../components/Map';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <h1>Construire les infrastructures publiques de <span className="text-accent">demain</span></h1>
          <p>Entreprise tunisienne spécialisée dans les travaux publics et le bâtiment (Catégorie 3). Nous bâtissons l'avenir avec rigueur, sécurité et excellence.</p>
          <div className="hero-actions">
            <Link to="/projets" className="btn btn-primary">
              Découvrir nos réalisations <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="btn btn-outline">
              Notre Expertise
            </Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
        {/* Placeholder for the large hero image */}
        <div className="hero-bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888086225-f6b3bce9488a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}></div>
      </section>

      {/* Trust & Stats Section */}
      <section className="section stats-section bg-light">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card fade-in-scroll">
              <span className="stat-number">18+</span>
              <span className="stat-label">Projets Publics Majeurs</span>
            </div>
            <div className="stat-card fade-in-scroll" style={{ animationDelay: '0.1s' }}>
              <span className="stat-number">16M</span>
              <span className="stat-label">Budget Cumulé (TND)</span>
            </div>
            <div className="stat-card fade-in-scroll" style={{ animationDelay: '0.2s' }}>
              <span className="stat-number">5</span>
              <span className="stat-label">Secteurs d'Activité</span>
            </div>
            <div className="stat-card fade-in-scroll" style={{ animationDelay: '0.3s' }}>
              <span className="stat-number">10+</span>
              <span className="stat-label">Régions Couvertes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Notre Cœur de Métier</span>
            <h2>Domaines d'Intervention</h2>
            <p style={{ maxWidth: '700px' }}>De l'éducation à la santé, BARRANI Bâtiment intervient sur des projets d'infrastructure variés avec la même exigence de qualité.</p>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <Building2 className="expertise-icon" size={32} />
              <h3>Bâtiments Administratifs</h3>
              <p>Construction et réhabilitation de sièges régionaux, municipalités et bureaux gouvernementaux.</p>
              <Link to="/services" className="learn-more">En savoir plus <ChevronRight size={16} /></Link>
            </div>
            
            <div className="expertise-card">
              <HardHat className="expertise-icon" size={32} />
              <h3>Établissements de Santé</h3>
              <p>Hôpitaux, cliniques et centres de santé. (ex: Bloc opératoire et IRM Hôpital de Tozeur).</p>
              <Link to="/services" className="learn-more">En savoir plus <ChevronRight size={16} /></Link>
            </div>
            
            <div className="expertise-card">
              <ShieldCheck className="expertise-icon" size={32} />
              <h3>Travaux Publics & Génie Civil</h3>
              <p>Infrastructures routières, structures en béton armé et aménagements urbains d'envergure.</p>
              <Link to="/services" className="learn-more">En savoir plus <ChevronRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="section bg-dark">
        <div className="container">
          <div className="values-grid">
            <div className="values-content">
              <span className="section-subtitle" style={{ color: 'var(--clr-accent-light)' }}>Engagements</span>
              <h2 style={{ color: 'white' }}>L'Excellence comme Standard</h2>
              <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem' }}>
                Notre réputation s'est construite sur notre capacité à livrer des chantiers complexes dans les délais impartis, sans jamais compromettre la sécurité ou la qualité d'exécution.
              </p>
              
              <ul className="values-list">
                <li>
                  <div className="value-icon"><ShieldCheck size={24} /></div>
                  <div>
                    <h4>Sécurité Absolue</h4>
                    <p>Tolérance zéro pour les risques sur nos chantiers. La sécurité de nos équipes est notre priorité n°1.</p>
                  </div>
                </li>
                <li>
                  <div className="value-icon"><Clock size={24} /></div>
                  <div>
                    <h4>Respect des Délais</h4>
                    <p>Zéro litige majeur sur les délais contractuels. Planification rigoureuse et mobilisation optimale.</p>
                  </div>
                </li>
              </ul>
              
              <Link to="/hse" className="btn btn-outline" style={{ marginTop: '2rem' }}>Découvrir notre politique HSE</Link>
            </div>
            
            <div className="values-image">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Ingénieur sur chantier" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Summary */}
      <section className="section">
        <div className="container text-center">
          <h2>Nos Dernières Réalisations</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>Un aperçu de nos projets majeurs réalisés dans la région du Sud-Ouest tunisien.</p>
          <Link to="/projets" className="btn btn-primary btn-large">Voir le Portfolio Complet</Link>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Nous Trouver</span>
            <h2>Notre Siège Social</h2>
            <p>Rendez-nous visite à Gafsa pour discuter de vos futurs projets.</p>
          </div>
          <div style={{ marginTop: '3rem', border: '1px solid var(--clr-bg-alt)', padding: '1rem', background: 'white', borderRadius: '8px' }}>
            <Map />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
