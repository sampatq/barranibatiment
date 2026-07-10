import { ShieldAlert, Leaf, CheckCircle, HeartPulse } from 'lucide-react';

const Hse = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Politique HSE</h1>
          <p>Hygiène, Sécurité et Environnement. La protection de nos collaborateurs et le respect des normes sont au cœur de nos priorités.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="expertise-grid" style={{ marginTop: 0 }}>
            <div className="expertise-card">
              <ShieldAlert className="expertise-icon" size={32} />
              <h3>Sécurité au Travail</h3>
              <p>Mise en place de procédures strictes de prévention des risques, port obligatoire des équipements de protection individuelle (EPI) et audit régulier de nos chantiers.</p>
            </div>
            
            <div className="expertise-card">
              <HeartPulse className="expertise-icon" size={32} />
              <h3>Santé & Formation</h3>
              <p>Formation continue de nos équipes aux protocoles de sécurité. Sensibilisation permanente à la culture sécurité pour prévenir tout accident.</p>
            </div>
            
            <div className="expertise-card">
              <Leaf className="expertise-icon" size={32} />
              <h3>Engagement Environnemental</h3>
              <p>Gestion optimisée des déchets de chantier, sélection de matériaux durables et respect des réglementations environnementales en vigueur.</p>
            </div>

            <div className="expertise-card">
              <CheckCircle className="expertise-icon" size={32} />
              <h3>Qualité (QSE)</h3>
              <p>Contrôle qualité systématique à chaque étape d'avancement. Application rigoureuse des normes nationales et internationales du BTP.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hse;
