const Skills = () => {
  const skillCategories = [
    {
      label: "Languages & Frameworks",
      skills: ['React', 'Next.js', 'JavaScript', '.NET Core', 'Flutter', 'Node.js', 'Express', 'Java', 'SpringBoot']
    },
    {
      label: "Databases",
      skills: ['SQL Server', 'MySQL', 'Oracle Database', 'MongoDB']
    },
    {
      label: "Cloud & DevOps",
      skills: ['Azure', 'CI/CD', 'DevOps', 'GitHub Actions', 'Git', 'REST APIs']
    },
    {
      label: "Soft Skills",
      skills: ['Critical Thinking', 'Assertive Communication', 'Teamwork', 'Deep Research', 'Scrum']
    }
  ];

  const certifications = [
    'AWS Educate Introduction to Cloud 101',
    'Git y GitHub: repositorio, commit y versiones',
    'Angular - The Complete Guide'
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
                <span className="cert-name">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills