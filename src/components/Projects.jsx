import '../../sass/main.scss';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className='hero-gradient text-center p-5'>
      <h2 className='bg-transparent fw-bold fs-1 text-white mb-5'>
        My Projects
      </h2>
      
      <div className="container bg-transparent">
        <div className="row bg-transparent justify-content-center ">
          <ProjectCard titulo={"TicoBites"} 
            descripcion={"Designed and developed a mobile application that enables users to review restaurants, create and share curated lists, follow other food enthusiasts, and explore dining options using filters such as cuisine, location, and ratings. Implemented features like profile customization, favorites, achievements, and calendar integration to enhance user engagement."} 
            timeframe={"Under development"} 
            stack={['.NET', 'SQL Server', 'GitHub', 'GitHub Actions','Claude Sonnet 4', 'Azure']} 
            codeUrl={"https://github.com/diegoalonsonm/ticobites-server"} 
            demoUrl={"https://github.com/diegoalonsonm/ticobites-server"} 
          />
          <ProjectCard titulo={"Cash Controller"} 
            descripcion={"A user-friendly financial management application that enables users to efficiently track and analyze their income and expenses. Features interactive graphics, expenditure categories, and comprehensive financial insights."} 
            timeframe={"2024"} 
            stack={['React', 'Node JS', 'MySQL', 'GitHub','Next JS', 'Azure', 'Vercel']} 
            codeUrl={"https://github.com/diegoalonsonm/cash-controller-server"} 
            demoUrl={"https://cash-controller-client.vercel.app/"} 
          />
        </div>
      </div>
    </section>
  )
}

export default Projects