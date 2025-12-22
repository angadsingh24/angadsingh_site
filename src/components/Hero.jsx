function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Angad Singh</span>
          </h1>
          <p className="hero-subtitle">
            CS major @ University of Michigan
          </p>
          <p className="hero-description">
            Fascinated by the intersection of business and technology
          </p>
        </div>
        <div className="hero-cta">
          <a href="#projects" className="cta-button">View My Work</a>
          <a href="#about" className="cta-button secondary">Learn More</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero

