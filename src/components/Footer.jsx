const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-brutal">
      <span className="footer-copyright font-mono">
        &copy; {currentYear} - DNM Studio
      </span>
    </footer>
  )
}

export default Footer