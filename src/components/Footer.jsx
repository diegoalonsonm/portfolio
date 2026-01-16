const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-brutal">
      <span className="footer-copyright font-mono">
        &copy; {currentYear} Diego Naranjo
      </span>
    </footer>
  )
}

export default Footer