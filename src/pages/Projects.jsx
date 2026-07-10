import { MapPin, Calendar, Wallet, User, Clock } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Construction d'une école préparatoire à Nefta",
      client: "Ministère de l'Éducation",
      location: "Nefta, Gouvernorat de Tozeur",
      year: "2023",
      amount: "Non communiqué",
      duration: "En cours",
      description: "Travaux de gros œuvre, second œuvre et aménagements intérieurs pour la création d'une nouvelle infrastructure éducative moderne.",
      image: "https://images.unsplash.com/photo-1541888086225-f6b3bce9488a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Éducation"
    },
    {
      id: 2,
      name: "Siège de la délégation Hammet Ejrid",
      client: "Gouvernorat de Tozeur",
      location: "Hammet Ejrid, Tozeur",
      year: "2023",
      amount: "1 710 511,08 TND",
      duration: "12 mois",
      description: "Construction d'un bâtiment administratif complet. Structure en béton armé et finitions de haute qualité pour le service public.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Administratif"
    },
    {
      id: 3,
      name: "Service IRM Hôpital Régional",
      client: "Ministère de la Santé",
      location: "Tozeur",
      year: "2022",
      amount: "1 297 521,65 TND",
      duration: "10 mois",
      description: "Construction spécialisée d'un service IRM, respectant les normes sanitaires et techniques rigoureuses des infrastructures médicales.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Santé"
    },
    {
      id: 4,
      name: "Salle Omnisport",
      client: "Ministère de la Jeunesse et des Sports",
      location: "Metlaoui",
      year: "2022",
      amount: "4 001 839,22 TND",
      duration: "18 mois",
      description: "Construction d'une salle omnisport de grande envergure, dotée d'équipements modernes selon les normes internationales.",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sport & Loisirs"
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>Portfolio des Projets</h1>
          <p>Découvrez nos réalisations majeures en bâtiment et travaux publics. Une expertise prouvée sur des infrastructures d'envergure.</p>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card fade-in-scroll">
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                  <span className="project-category">{project.category}</span>
                </div>
                
                <div className="project-content">
                  <h2>{project.name}</h2>
                  
                  <div className="project-meta-grid">
                    <div className="meta-item">
                      <User size={18} />
                      <div>
                        <span className="meta-label">Client</span>
                        <span className="meta-value">{project.client}</span>
                      </div>
                    </div>
                    
                    <div className="meta-item">
                      <MapPin size={18} />
                      <div>
                        <span className="meta-label">Lieu</span>
                        <span className="meta-value">{project.location}</span>
                      </div>
                    </div>
                    
                    <div className="meta-item">
                      <Wallet size={18} />
                      <div>
                        <span className="meta-label">Budget</span>
                        <span className="meta-value">{project.amount}</span>
                      </div>
                    </div>
                    
                    <div className="meta-item">
                      <Clock size={18} />
                      <div>
                        <span className="meta-label">Durée</span>
                        <span className="meta-value">{project.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
