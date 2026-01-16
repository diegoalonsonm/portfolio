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
              I am a <span className="text-accent">Software Engineer</span> driven by a passion for building intelligent, scalable solutions. My expertise lies at the intersection of <span className="text-accent">Full-Stack Development</span> and <span className="text-accent">Artificial Intelligence</span>, where I turn complex technical requirements into seamless, user-centric applications.
            </p>
            <p>
              I specialize in crafting tailored software using modern frameworks like <span className="text-accent">React</span>, <span className="text-accent">Next.js</span>, and <span className="text-accent">.NET</span>, integrated with cutting-edge AI capabilities. Beyond writing code, I focus on the bigger picture—utilizing <span className="text-accent">Clean Architecture</span> and <span className="text-accent">System Design</span> principles to create robust systems that stand the test of time.
            </p>
            <p>
              I thrive on innovation and adaptability. My approach is defined by a relentless drive to solve problems and deliver high-impact results, regardless of the environment. Whether I am architecting complex web applications or leveraging <span className="text-accent">Agentic AI</span> to redefine workflows, my goal is always the same: to build technology that doesn&apos;t just function, but excels.
            </p>
          </div>

          {/* Right column - Quick facts */}
          <div className="about-facts">
            <div className="fact-item">
              <span className="fact-label">Location</span>
              <span className="fact-value">Costa Rica</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Education</span>
              <span className="fact-value">Computer Systems Engineering</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Focus</span>
              <span className="fact-value">Full Stack Development, AI Engineering, Cloud Computing</span>
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
                <h4>AI-Driven Innovation</h4>
                <p>Integrating cutting-edge Agentic AI and automation to transform static software into intelligent, adaptive systems that evolve with business needs</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-number font-mono">02</span>
              <div className="focus-content">
                <h4>Scalable Full-Stack Architecture</h4>
                <p>Designing resilient, high-performance applications using Clean Architecture and modern frameworks like Next.js and .NET to ensure long-term stability and growth</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-number font-mono">03</span>
              <div className="focus-content">
                <h4>Strategic Solution Engineering</h4>
                <p>Translating complex technical requirements into seamless, user-centric products that bridge the gap between robust backend logic and intuitive modern design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About