import ProjectCard from './components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      number: "01",
      titulo: "TicoBites",
      descripcion: "Designed and developed a mobile application that enables users to review restaurants, create and share curated lists, follow other food enthusiasts, and explore dining options using filters such as cuisine, location, and ratings. Implemented features like profile customization, favorites, achievements, and calendar integration to enhance user engagement.",
      timeframe: "Under development",
      stack: ['.NET', 'SQL Server', 'GitHub', 'GitHub Actions', 'Claude Sonnet 4', 'Azure'],
      codeUrl: "https://github.com/diegoalonsonm/ticobites-server",
      demoUrl: "https://github.com/diegoalonsonm/ticobites-server"
    },
    {
      number: "02",
      titulo: "Cash Controller",
      descripcion: "A user-friendly financial management application that enables users to efficiently track and analyze their income and expenses. Features interactive graphics, expenditure categories, and comprehensive financial insights.",
      timeframe: "2024",
      stack: ['React', 'Node JS', 'MySQL', 'GitHub', 'Next JS', 'Azure', 'Vercel'],
      codeUrl: "https://github.com/diegoalonsonm/cash-controller-server",
      demoUrl: "https://cash-controller-client.vercel.app/"
    }
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