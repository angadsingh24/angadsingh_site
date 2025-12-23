function Projects({ openModal, setOpenModal }) {
  const projects = [
    {
      id: 'proj-1',
      title: '3D Laser Scanner',
      description: 'Prototyping a 3D Laser Scanner to Generate a Point Cloud Visualization of Deformable Origami Robots',
      tech: ['C++', 'ROS', 'Arduino', 'PCL'],
      image: `${import.meta.env.BASE_URL}images/lidar.png`,
      link: 'https://docs.google.com/document/d/14b51KlOWTnBAQ5DodsVSAcige71gZawspGFyAAnjiDg/edit?usp=sharing',
      linkText: 'Research Paper'
    },
    {
      id: 'proj-2',
      title: 'Stock Sentiment Analysis',
      description: 'Custom deep neural network using LSTM for sentiment analysis on Twitter stock data with 77.5% accuracy',
      tech: ['Python', 'LSTM', 'Deep Learning'],
      image: `${import.meta.env.BASE_URL}images/stock_sentiment.png`,
      link: 'https://github.com/angadsingh24/stock_sentiment_analysis/tree/main',
      linkText: 'View Code'
    },
    {
      id: 'proj-3',
      title: 'Etch-a-Sketch',
      description: 'Interactive Etch a Sketch game built to practice DOM manipulation',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: `${import.meta.env.BASE_URL}images/etch.png`,
      link: 'https://angadsingh24.github.io/etch_a_sketch/',
      linkText: 'Try it out!'
    },
    {
      id: 'proj-4',
      title: 'Bank Management System',
      description: 'Console-based bank management system with full CRUD operations for account management',
      tech: ['C++', 'OOP'],
      image: `${import.meta.env.BASE_URL}images/bank.png`,
      link: 'https://github.com/angadsingh24/bank_management_system',
      linkText: 'View Code'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setOpenModal(project.id)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="view-details">View Details →</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
