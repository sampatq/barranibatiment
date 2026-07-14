import { Download, FileText, Award } from 'lucide-react';

const Documents = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Espace Téléchargement</h1>
          <p>Documents officiels, présentation de l'entreprise et références techniques pour nos partenaires et soumissions d'appels d'offres.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="expertise-grid" style={{ marginTop: 0 }}>
            <div className="expertise-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <FileText color="var(--clr-primary)" size={48} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Profil de l'Entreprise</h3>
              <p style={{ flexGrow: 1 }}>Présentation complète, portfolio des projets et chiffres clés de BARRANI Bâtiment (PowerPoint).</p>
              <a href="/portfolio.pptx" download="Société BARRANI Bâtiment - Portfolio Overview.pptx" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%', textDecoration: 'none' }}>
                <Download size={18} style={{ marginRight: '0.5rem' }} /> Télécharger
              </a>
            </div>

            <div className="expertise-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Award color="var(--clr-primary)" size={48} style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Attestation Catégorie 3</h3>
              <p style={{ flexGrow: 1 }}>Copie de l'agrément officiel Ministère de l'Équipement pour les marchés publics.</p>
              <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>
                <Download size={18} /> Télécharger
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
