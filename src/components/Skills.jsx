const Skills = () => {
  const skillCategories = [
    {
      label: "Languages & Frameworks",
      skills: ['React', 'Next JS', '.NET', 'Bootstrap', 'Tailwind', 'C#', 'JavaScript', 'TypeScript', 'SQL (SQL Server, Oracle, MySQL)', 'Mongo DB', 'Java', 'Python']
    },
    {
      label: "Technical Skills",
      skills: ['Generative AI', 'Prompt Engineering', 'AI Integrations', 'System Design', 'Git', 'Scrum', 'Rest API', 'MVC']
    },
    {
      label: "Cloud & DevOps",
      skills: ['Azure', 'AWS', 'CI/CD', 'Azure DevOps', 'GitHub Actions']
    },
    {
      label: "Soft Skills",
      skills: ['Adaptability', 'Discipline', 'Critical Thinking', 'Assertive Communication', 'Teamwork', 'Deep Research', 'Emotional Intelligence']
    }
  ];

  const certifications = [
    {
      name: 'Microsoft: Azure Fundamentals',
      url: 'https://learn.microsoft.com/en-gb/users/diegoalonsonaranjomeza-9811/credentials/f8212af0706d8e97?ref=https%3A%2F%2Fwww.linkedin.com%2F' 
    },
    {
      name: 'AWS Educate Introduction to Cloud 101',
      url: 'https://www.credly.com/badges/ae36e8d5-369f-47e2-a172-791c19a1a197/linked_in_profile' 
    },
    {
      name: 'Git y GitHub: repositorio, commit y versiones',
      url: 'https://app.aluracursos.com/certificate/3ca340a2-b4f6-44f7-85c1-a2eef08baff8' 
    },
    
  ];

  return (
    <section id="skills" className="skills-brutal section-padding">
      <div className="skills-container">
        {/* Section header */}
        <div className="skills-header">
          <span className="text-label">Expertise</span>
          <h2 className="section-title font-mono">SKILLS & TOOLS</h2>
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
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

        {/* Certifications */}
        <div className="certifications-section">
          <h3 className="certifications-title font-mono">CERTIFICATIONS</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <span className="cert-number font-mono">0{index + 1}</span>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-name"
                >
                  {cert.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills