const Skills = () => {
  const techCategories = [
    {
      label: "Automatizaci\u00f3n",
      skills: ['n8n', 'Webhooks', 'APIs REST', 'Integraciones de sistemas', 'Workflows automatizados']
    },
    {
      label: "Inteligencia Artificial",
      skills: ['LangChain', 'OpenAI API', 'Anthropic API', 'Prompt Engineering', 'RAGs', 'Embeddings', 'Agentes de IA']
    },
    {
      label: "Infraestructura",
      skills: ['Supabase', 'PostgreSQL', 'Vector DBs', 'Vercel', 'Cloud Hosting', 'CI/CD']
    },
    {
      label: "Desarrollo",
      skills: ['Next.js', 'React', 'Node.js', 'Python', '.NET', 'TypeScript', 'SQL']
    }
  ];

  return (
    <section id="tech" className="skills-brutal section-padding">
      <div className="skills-container">
        {/* Section header */}
        <div className="skills-header">
          <span className="text-label">Tech Stack</span>
          <h2 className="section-title font-mono">HERRAMIENTAS Y TECNOLOG&Iacute;A</h2>
        </div>

        {/* Tech grid */}
        <div className="skills-grid">
          {techCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-label">{category.label}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
