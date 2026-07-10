import { Building2, HardHat, ShieldCheck, Map, Truck, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Notre Expertise</h1>
          <p>Six domaines d'intervention, une expertise complète. De l'éducation à l'environnement, BARRANI Bâtiment déploie la même rigueur technique.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="expertise-grid" style={{ marginTop: 0 }}>
            <div className="expertise-card">
              <Building2 className="expertise-icon" size={32} />
              <h3>Bâtiments Administratifs</h3>
              <p>Construction et réhabilitation de sièges administratifs régionaux, municipalités et bureaux gouvernementaux. Finitions de haute qualité et respect strict des cahiers des charges publics.</p>
            </div>
            
            <div className="expertise-card">
              <HardHat className="expertise-icon" size={32} />
              <h3>Établissements de Santé</h3>
              <p>Infrastructures sanitaires complexes : Hôpitaux, cliniques, blocs opératoires et salles spécialisées (IRM, Scanner). Conformité absolue aux normes médicales.</p>
            </div>
            
            <div className="expertise-card">
              <ShieldCheck className="expertise-icon" size={32} />
              <h3>Éducation & Enseignement</h3>
              <p>Construction d'écoles, lycées, collèges et internats. Création d'environnements d'apprentissage modernes, sécurisés et durables.</p>
            </div>

            <div className="expertise-card">
              <Map className="expertise-icon" size={32} />
              <h3>Génie Civil & VRD</h3>
              <p>Ouvrages d'art, fondations profondes, murs de soutènement, réseaux divers et aménagements extérieurs. Maîtrise complète du gros œuvre.</p>
            </div>

            <div className="expertise-card">
              <PenTool className="expertise-icon" size={32} />
              <h3>Culture, Sport & Loisirs</h3>
              <p>Maisons de culture, salles omnisports de grande envergure, complexes pour la jeunesse et parcs écologiques.</p>
            </div>

            <div className="expertise-card">
              <Truck className="expertise-icon" size={32} />
              <h3>Réhabilitation & Restauration</h3>
              <p>Modernisation d'infrastructures existantes, renforcement structurel et mise aux normes de bâtiments publics anciens.</p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/projets" className="btn btn-primary btn-large">Voir nos réalisations</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
