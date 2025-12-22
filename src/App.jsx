import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Modal from './components/Modal'
import './styles.css'

function App() {
  const [openModal, setOpenModal] = useState(null)

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience openModal={openModal} setOpenModal={setOpenModal} />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
      </main>
      <Footer />
      <Modal
        id={openModal}
        isOpen={openModal !== null}
        onClose={() => setOpenModal(null)}
      />
    </div>
  )
}

export default App
