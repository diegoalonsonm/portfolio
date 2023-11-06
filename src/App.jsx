// bs imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// component imports
import NavbarComponent from './components/Navbar.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <NavbarComponent />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
    </Container>
  </>
  )
}

export default App;