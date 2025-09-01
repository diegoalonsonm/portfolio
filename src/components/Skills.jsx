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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3da9fc" className="bi bi-laptop" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-database" viewBox="0 0 16 16">
                                    <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#aab4ce" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#EF4565" className="bi bi-people-fill bg-transparent" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#EF4565" className="bi bi-award-fill bg-transparent" viewBox="0 0 16 16">
                                    <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
                                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
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