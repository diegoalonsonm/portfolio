import '../../sass/main.scss';

const Skills = () => {
    return(
        <section id="skills" className='bg-light text-center p-5'>
            <h2 className='fw-bold bg-transparent fs-1 text-dark mb-5'>
                Skills & Expertise
            </h2>
            
            <div className="container bg-transparent" style={{maxWidth: '1200px'}}>
                {/* Skills Grid */}
                <div className="row bg-transparent mb-5">
                    {/* Programming & Frameworks */}
                    <div className="col-lg-3 bg-transparent col-md-6 mb-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">
                            <div className="bg-primary bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <svg width="24" height="24" fill="currentColor" className="text-primary">
                                    <path d="M9.5 3l1.5 3h4l-3 3 1 4-3.5-2L6 13l1-4-3-3h4l1.5-3z"/>
                                    <path d="M7 8a1 1 0 012 0v1a1 1 0 11-2 0V8z"/>
                                    <path d="M10 8a1 1 0 012 0v1a1 1 0 11-2 0V8z"/>
                                </svg>
                            </div>
                            <h5 className="fw-bold text-dark bg-transparent mb-3">Programming & Frameworks</h5>
                            <div className="d-flex bg-transparent flex-wrap gap-2 justify-content-center">
                                <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 small">React</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 small">Next.js</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 small">JavaScript</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 small">.NET Core</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 small">Flutter</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 small">Node.js</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 small">Express</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 small">Java</span>
                                <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 small">SpringBoot</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Databases */}
                    <div className="col-lg-3 bg-transparent col-md-6 mb-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">
                            <div className="bg-success bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <svg width="24" height="24" fill="currentColor" className="text-success">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                                    <path d="M10 12h4v2h-4v-2z"/>
                                    <path d="M8 8h8v2H8V8z"/>
                                </svg>
                            </div>
                            <h5 className="fw-bold text-dark bg-transparent mb-3">Databases</h5>
                            <div className="d-flex bg-transparent flex-wrap gap-2 justify-content-center">
                                <span className="badge bg-success bg-opacity-10 text-success px-2 py-1 small">SQL Server</span>
                                <span className="badge bg-success bg-opacity-10 text-success px-2 py-1 small">MySQL</span>
                                <span className="badge bg-success bg-opacity-10 text-success px-2 py-1 small">Oracle Database</span>
                                <span className="badge bg-success bg-opacity-10 text-success px-2 py-1 small">MongoDB</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Cloud & DevOps */}
                    <div className="col-lg-3 bg-transparent col-md-6 mb-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">
                            <div className="bg-info bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <svg width="24" height="24" fill="currentColor" className="text-info">
                                    <path d="M4.5 9a5.5 5.5 0 1111 0v2h1a2 2 0 012 2v5a2 2 0 01-2 2h-12a2 2 0 01-2-2v-5a2 2 0 012-2h1V9z"/>
                                    <path d="M12 1a8 8 0 00-8 8v1h2V9a6 6 0 1112 0v1h2V9A8 8 0 0012 1z"/>
                                </svg>
                            </div>
                            <h5 className="fw-bold text-dark bg-transparent mb-3">Cloud & DevOps</h5>
                            <div className="d-flex bg-transparent flex-wrap gap-2 justify-content-center">
                                <span className="badge bg-info bg-opacity-10 text-info px-2 py-1 small">Azure</span>
                                <span className="badge bg-info bg-opacity-10 text-info px-2 py-1 small">CI/CD</span>
                                <span className="badge bg-info bg-opacity-10 text-info px-2 py-1 small">DevOps</span>
                                <span className="badge bg-info bg-opacity-10 text-info px-2 py-1 small">GitHub Actions</span>
                                <span className="badge bg-info bg-opacity-10 text-info px-2 py-1 small">Git</span>
                                <span className="badge bg-info bg-opacity-10 text-info px-2 py-1 small">REST APIs</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Soft Skills */}
                    <div className="col-lg-3 bg-transparent col-md-6 mb-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-center">
                            <div className="bg-warning bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <svg width="24" height="24" fill="currentColor" className="text-warning">
                                    <path d="M15 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.022.002H7.022z"/>
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                </svg>
                            </div>
                            <h5 className="fw-bold text-dark bg-transparent mb-3">Soft Skills</h5>
                            <div className="d-flex bg-transparent flex-wrap gap-2 justify-content-center">
                                <span className="badge bg-warning bg-opacity-10 text-warning px-2 py-1 small">Critical Thinking</span>
                                <span className="badge bg-warning bg-opacity-10 text-warning px-2 py-1 small">Assertive Communication</span>
                                <span className="badge bg-warning bg-opacity-10 text-warning px-2 py-1 small">Teamwork</span>
                                <span className="badge bg-warning bg-opacity-10 text-warning px-2 py-1 small">Deep Research</span>
                                <span className="badge bg-warning bg-opacity-10 text-warning px-2 py-1 small">Scrum</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                {/* Certifications Section */}
                <div className="mt-5 ">
                    <div className="bg-white rounded-4 shadow-sm p-4">
                        <div className="text-center bg-transparent mb-4">
                            <div className="bg-warning bg-opacity-10 rounded-3 d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <svg width="24" height="24" fill="currentColor" className="text-warning">
                                    <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365L3.365 7.506 3.613 6l.248-1.506L4.947 3.422l.684-1.365L7.145 1.83 8 2.126l.855-.296 1.514.227z"/>
                                    <path d="M8 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6 8a2 2 0 114 0H6z"/>
                                </svg>
                            </div>
                            <h3 className="fw-bold bg-transparent text-dark mb-4">Certifications</h3>
                        </div>
                        
                        <div className="row bg-transparent">
                            <div className="col-lg-4 bg-transparent mb-3">
                                <div className="text-center bg-transparent p-3">
                                    <h6 className="fw-semibold bg-transparent text-dark mb-1">AWS Educate Introduction to Cloud 101</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 bg-transparent mb-3">
                                <div className="text-center bg-transparent p-3">
                                    <h6 className="fw-semibold bg-transparent text-dark mb-1">Git y GitHub: repositorio, commit y versiones</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 bg-transparent mb-3">
                                <div className="text-center bg-transparent p-3">
                                    <h6 className="fw-semibold text-dark bg-transparent mb-1">Angular - The Complete Guide</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills