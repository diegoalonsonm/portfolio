import ProjectCard from './components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      number: "01",
      titulo: "Peseta",
      descripcion: "Designed and engineered Peseta, a comprehensive financial management ecosystem that empowers users to visualize and control their economic health. Built upon a robust Next.js and Node.js architecture, the application integrates interactive Chart.js analytics to transform raw transactional data into actionable financial insights. This project demonstrates end-to-end full-stack expertise, encompassing a normalized MySQL database design, automated CI/CD workflows, and seamless cloud deployment via Vercel to ensure high availability and performance.",
      timeframe: "2026",
      stack: ['Node.js', 'Express', 'Next.js', 'MySQL', 'Bootstrap', 'Chart.js', 'Vercel', 'GitHub'],
      codeUrl: "https://github.com/diegoalonsonm/peseta-server",
      demoUrl: "https://peseta.dnmstudio.io/"
    },
  ];

  return (
    <section id="projects" className="projects-brutal section-padding">
      <div className="projects-container">
        {/* Section header */}
        <div className="projects-header">
          <span className="text-label">Portfolio</span>
          <h2 className="section-title font-mono">SELECTED WORK</h2>
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              number={project.number}
              titulo={project.titulo}
              descripcion={project.descripcion}
              timeframe={project.timeframe}
              stack={project.stack}
              codeUrl={project.codeUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects