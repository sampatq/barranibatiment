import { Users, Briefcase, FileText } from 'lucide-react';

const Careers = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Carrières & Recrutement</h1>
          <p>Rejoignez un acteur majeur du BTP en Tunisie. Nous recrutons en permanence des talents passionnés par la construction.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="values-grid">
            <div>
              <h2 style={{ color: 'var(--clr-primary)' }}>Construisez votre avenir avec nous</h2>
              <p style={{ color: 'var(--clr-text-light)', marginBottom: '2rem' }}>
                Chez BARRANI Bâtiment, nous offrons un environnement de travail stimulant sur des projets d'envergure. Nous valorisons la compétence, la rigueur et l'esprit d'équipe.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Users color="var(--clr-accent)" size={24} />
                  <strong>Ingénieurs & Conducteurs de Travaux</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Briefcase color="var(--clr-accent)" size={24} />
                  <strong>Techniciens & Chefs de Chantier</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <FileText color="var(--clr-accent)" size={24} />
                  <strong>Ouvriers Qualifiés & Opérateurs d'Engins</strong>
                </div>
              </div>
            </div>
            
            <div style={{ background: 'var(--clr-bg-alt)', padding: '3rem', borderRadius: '4px' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Candidature Spontanée</h3>
              <p>Envoyez votre CV et lettre de motivation à notre service RH :</p>
              <a href="mailto:barranibatiment@gmail.com?subject=Candidature%20Spontan%C3%A9e" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                Postuler par Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
