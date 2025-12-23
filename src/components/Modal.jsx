import { useEffect } from 'react'

function Modal({ id, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !id) return null

  // Experience modals
  const experienceData = {
    'exp-1': {
      title: 'Sophomore Summer Business Analyst @ McKinsey & Company',
      content: (
        <>
          <h2>Incoming Sophomore Summer Business Analyst @ McKinsey & Company</h2>
          <p><strong>Location:</strong> Chicago, IL | <strong>Period:</strong> Jun. 2026</p>
          <p>
            Upcoming summer business analyst position at one of the world's leading management consulting firms. 
            McKinsey & Company is known for helping organizations solve their most complex problems and transform 
            their performance.
          </p>
          <p><strong>Skills:</strong> Consulting, Business Analysis, Strategy, Problem Solving</p>
          <a href="https://www.mckinsey.com/" target="_blank" rel="noopener noreferrer" className="modal-link">Visit Website</a>
        </>
      )
    },
    'exp-2': {
      title: 'Founding Software Engineer @ Renovait',
      content: (
        <>
          <h2>Founding Software Engineer @ Renovait</h2>
          <p><strong>Location:</strong> Ann Arbor, MI | <strong>Period:</strong> Sept. 2025 - Dec. 2025</p>
         
          <ul style={{ textAlign: 'left', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>
              Engineered Renovait's full-stack web platform, implementing responsive React front-end interfaces, 
              scalable backend APIs, and AI-powered features that personalized user experiences for <strong>500+ users</strong>.
            </li>
            <li>
              Streamlined AI image generation pipeline by implementing asynchronous task handling and model optimization 
              techniques, <strong>reducing average generation latency by over 40%</strong> and enhancing responsiveness under high load.
            </li>
          </ul>
          <p><strong>Skills:</strong> React, Full-Stack Development, AI/ML, Backend APIs, System Optimization, Asynchronous Programming</p>
        </>
      )
    },
    'exp-3': {
      title: 'Data Analytics & Strategy Intern @ Applied Materials',
      content: (
        <>
          <h2>Data Analytics & Strategy Intern @ Applied Materials</h2>
          <p><strong>Location:</strong> Santa Clara, CA | <strong>Period:</strong> Jun. 2025</p>
         
          <ul style={{ textAlign: 'left', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>
              Uncovered key trends for <strong>6 business units</strong> by developing Tableau and Excel dashboards using 
              multiple streams of HR Data to deliver actionable insights to <strong>10+ senior stakeholders</strong>, 
              thus informing strategic talent decisions.
            </li>
            <li>
              Optimized internal chatbot and validated data accuracy by collaborating with cross-functional teams to 
              align analytics with stakeholder goals, thus improving dashboard functionality and overall reporting efficiency.
            </li>
          </ul>
          <p><strong>Skills:</strong> Tableau, Excel, Data Analysis, HR Analytics, Stakeholder Management, Cross-functional Collaboration</p>
          <a href="https://www.appliedmaterials.com/" target="_blank" rel="noopener noreferrer" className="modal-link">Visit Website</a>
        </>
      )
    },
    'exp-4': {
      title: 'Project Manager & Technical Consultant @ MECC Consulting Group',
      content: (
        <>
          <h2>Project Manager & Technical Consultant @ MECC Consulting Group</h2>
          <p><strong>Location:</strong> Ann Arbor, MI | <strong>Period:</strong> Sept. 2024 - Present</p>
          <p>
            Consulting for major clients including Delta Airlines and Tempus AI, developing machine learning models 
            and strategic reports to solve complex business problems.
          </p>
          <h3>Key Projects:</h3>
          <ul style={{ textAlign: 'left', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>
              <strong>Legna Software:</strong> Managed a team of 3 consultants to deliver a 60-slide strategic report for Legna, which was used to increase client acquisition.

            </li>
            <li>
              <strong>Delta Airlines:</strong> Developed machine learning model and full-stack web application using 
              React and Python to predict optimal number of checked-in bags per flight, which predicted decreasing 
              departure delays for <strong>70% of their flights</strong>.
            </li>
            <li>
              <strong>Tempus AI:</strong> Cultivated <strong>17-page strategic report</strong> for optimizing and scaling 3 predictive 
              algorithms by aggregating digital pathology industry reports, <strong>10+ pathologist interviews</strong>, and custom 
              industry adoption curve in Python.
            </li>
          </ul>
          <p><strong>Skills:</strong> Machine Learning, React, Python, Consulting, Data Analysis, Strategic Planning</p>
          <a href="https://meccconsulting.com/index.html" target="_blank" rel="noopener noreferrer" className="modal-link">Visit Website</a>
        </>
      )
    },
    'exp-5': {
      title: 'Software Engineering Intern @ Coachence',
      content: (
        <>
          <h2>Software Engineering Intern @ Coachence</h2>
          <p><strong>Location:</strong> Remote | <strong>Period:</strong> Jul. 2024 - Aug. 2024</p>

          <h3>Key Achievements:</h3>
          <ul style={{ textAlign: 'left', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>
              Prototyped internal portal to show Amazon driver rankings by harnessing driver data using Python, 
              MySQL, and HTML/CSS, which was sent out to <strong>100+ drivers</strong> to improve their performance and safety on 
              the roads by <strong>10%</strong>.
            </li>
            <li>
              Analyzed driver safety data using Python visualizations and SQL queries to synthesize insights into 
              executive-facing slides, securing buy-in from Coachence leaders to implement recommendations.
            </li>
          </ul>
          <p><strong>Skills:</strong> Python, MySQL, HTML, CSS, SQL, Data Visualization, Data Analysis</p>
          <a href="https://www.coachence.com/" target="_blank" rel="noopener noreferrer" className="modal-link">Visit Website</a>
        </>
      )
    },
    'exp-6': {
      title: 'Co-founder @ Academic Advancements',
      content: (
        <>
          <h2>Co-founder @ Academic Advancements</h2>
          <p><strong>Location:</strong> Hightstown, NJ | <strong>Period:</strong> Jan. 2021 - Aug. 2024</p>
          <p>
            Student-led NGO committed to fulfilling the United Nations' fourth sustainability goal, quality education. 
            Academic Advancements is focused on elevating the education of underprivileged students through tutoring 
            and partnerships.
          </p>
          <h3>Key Achievements:</h3>
          <ul style={{ textAlign: 'left', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>
              Led go-to-market fundraising and marketing strategy for a 501(c)(3) nonprofit; built scalable operations, 
              drove stakeholder alignment, mobilized <strong>70+ volunteers</strong>, and established partnerships with 
              <strong> 13 nonprofits</strong> by conducting needs assessment and stakeholder outreach, reaching 
              <strong> 5,800 low-income students across 5 countries</strong> and <strong>$22.5K raised</strong>.
            </li>
            <li>
              Spearheaded the development and implementation of Python, computer literacy, and math curricular and 
              tutored <strong>20+ students</strong> in India and US, <strong>increasing average performance by 25%</strong>.
            </li>
          </ul>
          <p><strong>Skills:</strong> Nonprofit Management, Fundraising, Curriculum Development, Python, Teaching, Stakeholder Engagement</p>
          <a href="https://www.academicadvancements.org" target="_blank" rel="noopener noreferrer" className="modal-link">Visit Website</a>
        </>
      )
    },
    'exp-7': {
      title: 'Robotics Research Intern @ Sung Robotics Lab',
      content: (
        <>
          <h2>Robotics Research Intern @ Sung Robotics Lab</h2>
          <p><strong>Location:</strong> Philadelphia, PA | <strong>Period:</strong> Jun. 2023 - Aug. 2023</p>
          <p>
            Worked alongside Professor Cynthia Sung at the University of Pennsylvania's GRASP Lab.
          </p>
          <h3>Key Achievements:</h3>
          <ul style={{ textAlign: 'left', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>
              Engineered an affordable, novel 3D Light Detection and Ranging system (LIDAR) from a 2D LIDAR, using 
              C++ and ROS, that enabled researchers to obtain a 3D visualization of <strong>6 robots</strong> for analysis on contraction data.
            </li>
            <li>
              Delivered 2D data to server via ROS communication protocol by coding <strong>4 ROS nodes</strong> using C++ and Arduino; 
              manipulated said data using matrix transformations, resulting in 3D point cloud containing <strong>1000+ points</strong>.
            </li>
          </ul>
          <p><strong>Skills:</strong> C++, ROS, Arduino, Robotics, Computer Vision, Point Cloud Processing</p>
          <a href="https://docs.google.com/document/d/14b51KlOWTnBAQ5DodsVSAcige71gZawspGFyAAnjiDg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="modal-link">View Research Paper</a>
        </>
      )
    }
  }

  // Project modals
  const projectData = {
    'proj-1': {
      title: 'Research Project - Prototyping a 3D Laser Scanner',
      content: (
        <>
          <h2>Prototyping a 3D Laser Scanner to Generate a Point Cloud Visualization of Deformable Origami Robots</h2>
          <p>
            I worked alongside Professor Cynthia Sung at the University of Pennsylvania in the summer of 2023 
            to prototype this laser scanner. I programmed the system using the Robot Operating System (ROS)
            with C++. I also programmed motors and connected motors using Arduino, and visualized the desired
            point cloud using the Point Cloud Library (PCL).
          </p>
          <a href="https://docs.google.com/document/d/14b51KlOWTnBAQ5DodsVSAcige71gZawspGFyAAnjiDg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="modal-link">Research Paper</a>
          <img src={`${import.meta.env.BASE_URL}images/lidar.png`} alt="Lidar Scanner" />
        </>
      )
    },
    'proj-2': {
      title: 'Stock Sentiment Analysis',
      content: (
        <>
          <h2>Stock Sentiment Analysis</h2>
          <p>
            I built a custom-based deep neural network to perform sentiment analysis on twitter data regarding stocks. 
            I used Python and used an LSTM. Below is the confusion matrix for my model, which had 77.5% accuracy.
          </p>
          <a href="https://github.com/angadsingh24/stock_sentiment_analysis/tree/main" target="_blank" rel="noopener noreferrer" className="modal-link">View code</a>
          <img src={`${import.meta.env.BASE_URL}images/stock_sentiment.png`} alt="Stock Sentiment Analysis" />
        </>
      )
    },
    'proj-3': {
      title: 'Etch-a-Sketch',
      content: (
        <>
          <h2>Etch-a-Sketch</h2>
          <p>
            I built a simple Etch a Sketch game to practice my DOM Manipulation. 
            I used HTML, CSS, and Javascript.
          </p>
          <a href="https://angadsingh24.github.io/etch_a_sketch/" target="_blank" rel="noopener noreferrer" className="modal-link">Try it out!</a>
          <img src={`${import.meta.env.BASE_URL}images/etch.png`} alt="Etch a Sketch" />
        </>
      )
    },
    'proj-4': {
      title: 'Bank Management System',
      content: (
        <>
          <h2>Bank Management System</h2>
          <p>
            I built a console-based bank management system 
            that allows users to create an account, deposit money, withdraw money, 
            view their balance, display all account holders, close an account, and update an account.
            This was a great project to practice OOP in C++.
          </p>
          <a href="https://github.com/angadsingh24/bank_management_system" target="_blank" rel="noopener noreferrer" className="modal-link">View the code!</a>
          <img src={`${import.meta.env.BASE_URL}images/bank.png`} alt="Bank Management System" />
        </>
      )
    }
  }

  const data = experienceData[id] || projectData[id]
  if (!data) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modern-modal">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-content">
          {data.content}
        </div>
      </div>
    </>
  )
}

export default Modal
