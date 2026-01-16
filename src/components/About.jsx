const About = () => {
  return (
    <section id="about" className="about-brutal section-padding">
      <div className="about-container">
        {/* Section header */}
        <div className="about-header">
          <span className="text-label">About</span>
          <h2 className="section-title font-mono">WHO I AM</h2>
        </div>

        {/* Main content - two column layout */}
        <div className="about-grid">
          {/* Left column - Main text */}
          <div className="about-text">
            <p>
              I&apos;m a Computer Science student at Fidelitas University, pursuing my degree in
              <span className="text-accent"> Computer Systems Engineering</span>. My journey in
              software development is driven by curiosity and a desire to create solutions that
              make a real impact.
            </p>
            <p>
              Through academic learning and self-directed research, I&apos;ve developed expertise
              in modern technologies including <span className="text-accent">React</span>,
              <span className="text-accent"> Azure Cloud</span>, <span className="text-accent">DevOps</span>,
              and <span className="text-accent">AI integration</span>. I believe in writing clean,
              maintainable code following best practices.
            </p>
          </div>

          {/* Right column - Quick facts */}
          <div className="about-facts">
            <div className="fact-item">
              <span className="fact-label">Location</span>
              <span className="fact-value">San José, Costa Rica</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Education</span>
              <span className="fact-value">Computer Systems Engineering</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Focus</span>
              <span className="fact-value">Full Stack Development</span>
            </div>
          </div>
        </div>

        {/* Focus areas - minimal list */}
        <div className="about-focus">
          <h3 className="focus-title font-mono">FOCUS AREAS</h3>
          <div className="focus-grid">
            <div className="focus-item">
              <span className="focus-number font-mono">01</span>
              <div className="focus-content">
                <h4>Problem Solving</h4>
                <p>Critical thinking and logical approach to complex challenges</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-number font-mono">02</span>
              <div className="focus-content">
                <h4>Best Practices</h4>
                <p>SOLID principles, design patterns, and clean architecture</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-number font-mono">03</span>
              <div className="focus-content">
                <h4>Modern Tech</h4>
                <p>Cloud technologies, DevOps, and AI integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About