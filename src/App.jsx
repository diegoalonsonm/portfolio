// Bootstrap is imported via SCSS for customization
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
    <div className="app-wrapper">
      <NavbarComponent />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;