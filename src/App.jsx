// bs imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../sass/main.scss';

// component imports
import NavbarComponent from './components/Navbar.jsx';
import About from './components/About.jsx';
import { Hero } from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <>
      {/* navbar component */}
      <Container fluid>
        <Row>
          <Col>
            <NavbarComponent />
          </Col>
        </Row>
      </Container>

      {/* hero component */}
      <Container fluid>
        <Row>
          <Col>
            <Hero />
          </Col>
        </Row>
      </Container>

      {/* about component */}
      <Container fluid>
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
      </Container>

      {/* projects component */}
      <Container fluid className='bg-light'>
        <Row>
          <Col>
            <Projects />
          </Col>
        </Row>
      </Container>

      {/* skills component */}
      <Container fluid>
        <Row>
          <Col>
            <Skills />
          </Col>
        </Row>
      </Container>

      {/* contact component */}
      <Container fluid>
        <Row>
          <Col>
            <Contact />
          </Col>
        </Row>
      </Container>

      {/* footer component */}
      <Container fluid>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;