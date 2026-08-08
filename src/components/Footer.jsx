const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-brutal">
      <div className="footer-links">
        <a href="/privacidad.html" className="footer-link font-mono">Privacidad</a>
        <a href="/terminos.html" className="footer-link font-mono">Terminos</a>
      </div>
      <span className="footer-copyright font-mono">
        &copy; {currentYear} - DNM Studio
      </span>
    </footer>
  )
}

export default Footer