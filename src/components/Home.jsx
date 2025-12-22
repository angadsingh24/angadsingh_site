import { useState } from 'react'
import Modal from './Modal'

function Home() {
  const [openModal, setOpenModal] = useState(null)

  const involvements = [
    {
      id: 'modal-1',
      title: 'Co-founder @ Academic Advancements',
      content: (
        <>
          <p>
            About Academic Advancements: We are a student-led NGO committed to 
            fulfilling the United Nations' 
            fourth sustainability goal, quality education. 
            Academic Advancements is focused on elevating the education of 
            underprivileged students through tutoring and partnerships. 
            Their education is compromised by a lack of income and 
            financial stability, and we directly provide aid to families on a regular basis, covering their tuition and other educational expenses.
            So far, we have raised <strong> $22,000 </strong> to support our cause
            and have made an impact on more than <strong> 5500 families</strong> in <strong> 4 countries</strong>. 
            Not only that, but we have inspired <strong> 60+ volunteers to work with us</strong>.
          </p>
          <p>Skills: Project management, web development, financial management, client/partner interaction</p>
          <a href="https://www.academicadvancements.org" target="_blank" rel="noopener noreferrer">Read more</a>
        </>
      )
    },
    {
      id: 'modal-2',
      title: 'Intern @ Coachence',
      content: (
        <>
          <p>
            I constructed an internal portal to show Amazon driver rankings by harnessing driver data using Python, MySQL, and HTML/CSS, which will be sent out to 100+ drivers to improve their performance and safety.
          </p>
          <p>Skills: Python, mySQL, HTML, CSS</p>
          <a href="https://www.coachence.com/" target="_blank" rel="noopener noreferrer">Read more</a>
        </>
      )
    },
    {
      id: 'modal-3',
      title: 'Consultant @ MECC Consulting Group',
      content: (
        <>
          <p>Consulted for Delta Airlines and Tempus AI.</p>
          <a href="https://meccconsulting.com/index.html" target="_blank" rel="noopener noreferrer">Read more</a>
        </>
      )
    }
  ]

  return (
    <>
      <div className="container1">
        <h1 className="title typewriter">Hi, I'm Angad!</h1>
        <p className="title typewriter">CS major @ University of Michigan, fascinated by the intersection of business and technology</p>
      </div>

      <div className="container2">
        <div className="involved_title">
          <p className="text_bounce" style={{ textAlign: 'center' }}>Currently Involved With</p>
        </div>

        <div className="projects">
          {involvements.map((item) => (
            <div key={item.id} className="project">
              <Modal
                id={item.id}
                title={item.title}
                isOpen={openModal === item.id}
                onClose={() => setOpenModal(null)}
                className="container2-modal"
              >
                {item.content}
              </Modal>
              
              <div className="button_container">
                <button 
                  className="trigger-modal" 
                  onClick={() => setOpenModal(item.id)}
                >
                  {item.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home

