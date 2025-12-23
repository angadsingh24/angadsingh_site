function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="modern-header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          Angad Singh
        </div>
        <nav className="nav-links">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>Experience</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a>
          <a href={`${import.meta.env.BASE_URL}images/resume.pdf`} target="_blank" rel="noopener noreferrer" className="resume-link">Resume</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
