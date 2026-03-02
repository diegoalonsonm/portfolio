import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-brutal" fixed="top">
      <Container fluid className="px-4 px-lg-5">
        <Navbar.Brand href="#home" className="navbar-brand-brutal font-mono">
          DNM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-brutal" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-lg-end">
          <Nav className="gap-lg-4">
            <Nav.Link href="#home" className="nav-link-brutal">Inicio</Nav.Link>
            <Nav.Link href="#servicios" className="nav-link-brutal">Servicios</Nav.Link>
            <Nav.Link href="#proceso" className="nav-link-brutal">Proceso</Nav.Link>
            <Nav.Link href="#tech" className="nav-link-brutal">Tech</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-brutal">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
