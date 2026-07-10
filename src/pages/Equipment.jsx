import { Truck, Wrench, Settings } from 'lucide-react';

const Equipment = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Parc Matériel</h1>
          <p>Une capacité d'exécution garantie par des équipements modernes et performants pour répondre aux exigences des grands chantiers.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="expertise-grid" style={{ marginTop: 0 }}>
            <div className="expertise-card text-center">
              <Truck className="expertise-icon" size={48} style={{ margin: '0 auto 1.5rem' }} />
              <h3>Engins Lourds</h3>
              <p>Pelleteuses, bulldozers, chargeuses et niveleuses pour les travaux de terrassement et fondations profondes.</p>
            </div>
            
            <div className="expertise-card text-center">
              <Settings className="expertise-icon" size={48} style={{ margin: '0 auto 1.5rem' }} />
              <h3>Béton & Levage</h3>
              <p>Pompes à béton, grues à tour, grues mobiles et centrales à béton pour les structures en hauteur et le gros œuvre.</p>
            </div>
            
            <div className="expertise-card text-center">
              <Wrench className="expertise-icon" size={48} style={{ margin: '0 auto 1.5rem' }} />
              <h3>Logistique de Chantier</h3>
              <p>Camions-bennes, compacteurs, véhicules utilitaires de chantier et bases de vie entièrement équipées.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
