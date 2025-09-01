import '../../sass/main.scss';

const About = () => {
  return (
    <section id='about' className='text-center p-5'>                  
          <h2 className='fw-bold fs-1 text-dark mb-5'>
            About Me
          </h2>
          
          {/* Main content area */}
          <div className="container" style={{maxWidth: '1200px'}}>
            <div className="row">
              {/* Left column - Description */}
              <div className="col-lg-8 text-start mb-4">
                <p className='text-muted lh-lg' style={{fontSize: '1.1rem'}}>
                  I&apos;m a passionate Computer Science student at Fidelitas University, currently pursuing my degree in Computer Systems Engineering. My journey in software development has been driven by curiosity and a desire to create innovative solutions that make a real impact.
                </p>
                <p className='text-muted lh-lg' style={{fontSize: '1.1rem'}}>
                  Through academic learning and self-directed research, I&apos;ve developed expertise in modern technologies including React, Azure Cloud, DevOps, and AI integration. I believe in writing clean, maintainable code following best practices like SOLID principles and proven design patterns.
                </p>
              </div>
              
              {/* Right column - Info cards */}
              <div className="col-lg-4">
                <div className="bg-white rounded-3 shadow-sm p-4 mb-3">
                  <div className="bg-white d-flex align-items-center mb-2">
                    <div className="bg-white bg-opacity-10 rounded-circle p-2 me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-journal" viewBox="0 0 16 16" stroke="#3da9fc">
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                      </svg>
                    </div>
                    <h6 className="bg-white fw-bold mb-0 text-dark">Education</h6>
                  </div>
                  <p className="bg-white text-muted mb-0" style={{fontSize: '0.95rem'}}>Computer Systems Engineering</p>
                </div>
                
                <div className="bg-white rounded-3 shadow-sm p-4 mb-3">
                  <div className="bg-white d-flex align-items-center mb-2">
                    <div className="bg-white bg-opacity-10 rounded-circle p-2 me-3">
                      <svg width="20" height="20" fill="currentColor" className="text-primary">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <h6 className="bg-white fw-bold mb-0 text-dark">Location</h6>
                  </div>
                  <p className="bg-white text-muted mb-0" style={{fontSize: '0.95rem'}}>San José, Costa Rica</p>
                </div>
                
                <div className="bg-white rounded-3 shadow-sm p-4">
                  <div className="bg-white d-flex align-items-center mb-2">
                    <div className="bg-white bg-opacity-10 rounded-circle p-2 me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar text-primary" viewBox="0 0 16 16" >
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                      </svg>
                    </div>
                    <h6 className="bg-white fw-bold mb-0 text-dark">Study Period</h6>
                  </div>
                  <p className="bg-white text-muted mb-0" style={{fontSize: '0.95rem'}}>2023 - Present</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Learning Areas */}
          <div className="container mt-5" style={{maxWidth: '1200px'}}>
            <h3 className="fw-bold text-dark mb-4">Key Learning Areas</h3>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-3 shadow-sm p-4 h-100">
                  <h5 className="bg-white text-primary fw-bold mb-3">Problem Solving</h5>
                  <p className="bg-white text-muted mb-0">Critical thinking and logical approach to complex challenges</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-3 shadow-sm p-4 h-100">
                  <h5 className="bg-white text-primary fw-bold mb-3">Best Practices</h5>
                  <p className="bg-white text-muted mb-0">SOLID principles, design patterns, and clean architecture</p>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-3 shadow-sm p-4 h-100">
                  <h5 className="bg-white text-primary fw-bold mb-3">Modern Tech</h5>
                  <p className="bg-white text-muted mb-0">Cloud technologies, DevOps, and AI integration</p>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default About