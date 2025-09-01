import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../sass/main.scss';
import '../App.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="shadow-sm p-3 mb-1 bg-body-tertiary rounded">
      <Container>
        <Navbar.Brand className="fw-bold text-primary fs-3">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-lg-end'>
          <Nav className="">
            <hr className='d-block d-lg-none' />
            <Nav.Link href="#home" className="fw-bold fs-5 text-secondary">Home</Nav.Link>
            <Nav.Link href="#about" className="fw-bold fs-5 text-secondary">About</Nav.Link>
            <Nav.Link href="#projects" className="fw-bold fs-5 text-secondary">My Projects</Nav.Link>
            <Nav.Link href="#contact" className="fw-bold fs-5 text-secondary">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;