function Experience({ openModal, setOpenModal }) {
  const involvements = [
    {
      id: 'exp-1',
      title: 'Incoming Sophomore Summer Business Analyst @ McKinsey & Company',
      company: 'McKinsey & Company',
      role: 'Incoming Sophomore Summer Business Analyst',
      location: 'Chicago, IL',
      period: 'Jun. 2026',
      description: 'Incoming summer business analyst position at one of the world\'s leading management consulting firms.',
      highlights: [
        'Upcoming role at McKinsey & Company',
        'Business analyst position in Chicago office'
      ],
      skills: ['Consulting', 'Business Analysis', 'Strategy'],
      link: 'https://www.mckinsey.com/',
      linkText: 'Visit Website',
      isFuture: true
    },
    {
      id: 'exp-2',
      title: 'Founding Software Engineer @ Renovait',
      company: 'Renovait',
      role: 'Founding Software Engineer',
      location: 'Ann Arbor, MI',
      period: 'September 2025',
      description: 'Engineered Renovait\'s full-stack web platform with AI-powered features for personalized user experiences.',
      highlights: [
        'Engineered full-stack web platform with React front-end and scalable backend APIs',
        'Implemented AI-powered features that personalized user experiences for 500+ users',
        'Streamlined AI image generation pipeline, reducing average generation latency by over 40%'
      ],
      skills: ['React', 'Full-Stack Development', 'AI/ML', 'Backend APIs', 'System Optimization'],
      link: '#',
      linkText: 'Learn More',
      isFuture: true
    },
    {
      id: 'exp-3',
      title: 'Data Analytics & Strategy Intern @ Applied Materials',
      company: 'Applied Materials',
      role: 'Data Analytics & Strategy Intern',
      location: 'Santa Clara, CA',
      period: 'Jun. 2025',
      description: 'Developed Tableau and Excel dashboards using HR data to deliver actionable insights to senior stakeholders.',
      highlights: [
        'Uncovered key trends for 6 business units by developing Tableau and Excel dashboards',
        'Delivered actionable insights to 10+ senior stakeholders using multiple streams of HR data',
        'Optimized internal chatbot and validated data accuracy with cross-functional teams',
        'Improved dashboard functionality and overall reporting efficiency'
      ],
      skills: ['Tableau', 'Excel', 'Data Analysis', 'HR Analytics', 'Stakeholder Management'],
      link: 'https://www.appliedmaterials.com/',
      linkText: 'Visit Website',
      isFuture: true
    },
    {
      id: 'exp-4',
      title: 'Project Manager & Technical Consultant @ MECC Consulting Group',
      company: 'MECC Consulting Group',
      role: 'Project Manager & Technical Consultant',
      location: 'Ann Arbor, MI',
      period: 'Sept. 2024 - Present',
      description: 'Consulting for major clients including Delta Airlines and Tempus AI, developing ML models and strategic reports.',
      highlights: [
        'Delta Airlines: Developed ML model and full-stack web app to predict optimal checked-in bags',
        'Tempus AI: Created 17-page strategic report for optimizing predictive algorithms'
      ],
      skills: ['Machine Learning', 'React', 'Python', 'Consulting', 'Data Analysis'],
      link: 'https://meccconsulting.com/index.html',
      linkText: 'Visit Website'
    },
    {
      id: 'exp-5',
      title: 'Software Engineering Intern @ Coachence',
      company: 'Coachence',
      role: 'Software Engineering Intern',
      location: 'Remote',
      period: 'Jul. 2024 - Aug. 2024',
      description: 'Prototyped internal portal for Amazon driver rankings and analyzed driver safety data.',
      highlights: [
        'Built portal using Python, MySQL, and HTML/CSS for 100+ drivers',
        'Improved driver performance and safety by 10%',
        'Created executive-facing slides with Python visualizations and SQL queries'
      ],
      skills: ['Python', 'MySQL', 'HTML', 'CSS', 'SQL', 'Data Visualization'],
      link: 'https://www.coachence.com/',
      linkText: 'Visit Website'
    },
    {
      id: 'exp-6',
      title: 'Co-founder @ Academic Advancements',
      company: 'Academic Advancements',
      role: 'Co-founder, Math/CS Tutor',
      location: 'Hightstown, NJ',
      period: 'Jan. 2021 - Aug. 2024',
      description: 'Student-led NGO committed to fulfilling the United Nations\' fourth sustainability goal, quality education.',
      highlights: [
        'Led go-to-market fundraising and marketing strategy, raised $22.5K',
        'Mobilized 70+ volunteers and established partnerships with 13 nonprofits',
        'Reached 5,800 low-income students across 5 countries',
        'Developed Python, computer literacy, and math curriculum',
        'Tutored 20+ students, increasing average performance by 25%'
      ],
      skills: ['Nonprofit Management', 'Fundraising', 'Curriculum Development', 'Python', 'Teaching'],
      link: 'https://www.academicadvancements.org',
      linkText: 'Visit Website'
    },
    {
      id: 'exp-7',
      title: 'Robotics Research Intern @ Sung Robotics Lab',
      company: 'Sung Robotics Lab, University of Pennsylvania',
      role: 'Robotics Research Intern',
      location: 'Philadelphia, PA',
      period: 'Jun. 2023 - Aug. 2023',
      description: 'Engineered an affordable, novel 3D LIDAR system from a 2D LIDAR for robotics research.',
      highlights: [
        'Built 3D LIDAR system using C++ and ROS for 3D visualization of 6 robots',
        'Delivered 2D data via ROS communication protocol using 4 ROS nodes',
        'Created 3D point cloud containing 1000+ points using matrix transformations'
      ],
      skills: ['C++', 'ROS', 'Arduino', 'Robotics', 'Computer Vision'],
      link: 'https://docs.google.com/document/d/14b51KlOWTnBAQ5DodsVSAcige71gZawspGFyAAnjiDg/edit?usp=sharing',
      linkText: 'Research Paper'
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {involvements.map((item, index) => {
            const isEven = index % 2 === 0
            const isMcKinsey = item.id === 'exp-1'
            return (
              <div 
                key={item.id} 
                className={`timeline-item ${isEven ? 'timeline-left' : 'timeline-right'}`}
              >
                <div className="timeline-dot"></div>
                <div 
                  className="timeline-content"
                  onClick={() => setOpenModal(item.id)}
                >
                  <div className="card-header">
                    <h3>{item.role}</h3>
                    <span className="company">{item.company}</span>
                    <span className="period">{item.period}</span>
                    {isMcKinsey && <span className="future-badge">Upcoming</span>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
