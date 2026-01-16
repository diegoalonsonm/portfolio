import DiegoCV from '../assets/pdf/DiegoCV.pdf'

export const Hero = () => {
  return (
    <section className="hero-brutal" id="home">
      <div className="hero-content">
        <span className="text-label">Full Stack Developer</span>
        <h1 className="hero-name">
          DIEGO<br />
          NARANJO
        </h1>
        <p className="hero-tagline">
          Building digital experiences with precision and purpose.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-brutal btn-fill">
            View Work
          </a>
          <a href={DiegoCV} target="_blank" rel="noopener noreferrer" className="btn-brutal">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
