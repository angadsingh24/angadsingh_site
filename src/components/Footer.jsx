function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <p>&copy; 2024 Angad Singh. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/angad-singh-a80a61233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/images/linkedIn.webp" alt="LinkedIn" />
          </a>
          <a href="https://github.com/angadsingh24" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="/images/git.png" alt="GitHub" />
          </a>
          <a href="mailto:angads@umich.edu" aria-label="Email">
            <img src="/images/gmail.png" alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
