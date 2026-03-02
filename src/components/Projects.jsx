const Projects = () => {
  const steps = [
    {
      number: "01",
      title: "Diagn\u00f3stico",
      description: "Auditamos tus procesos actuales para identificar cuellos de botella y oportunidades de automatizaci\u00f3n. Mapeamos las herramientas que ya usas, d\u00f3nde viven tus datos y calculamos el impacto real que cada mejora puede generar."
    },
    {
      number: "02",
      title: "Propuesta y Acuerdo",
      description: "Presentamos una propuesta basada en el valor que la soluci\u00f3n genera para tu negocio, no en horas de trabajo. Incluye timeline, entregables concretos, alcance definido y una estructura de cobro transparente."
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Implementamos la soluci\u00f3n con tus datos reales, iterando sobre resultados concretos. Durante el desarrollo mantenemos comunicaci\u00f3n constante y demos de avance para asegurar que el resultado se alinee con tus expectativas."
    },
    {
      number: "04",
      title: "Entrega y Soporte",
      description: "Demo en vivo mostrando el antes y despu\u00e9s de tus procesos. Entregamos documentaci\u00f3n completa: video tutorial, manual de usuario y documentaci\u00f3n t\u00e9cnica. Incluye 2 semanas de acompa\u00f1amiento post-entrega para monitoreo y ajustes."
    }
  ];

  return (
    <section id="proceso" className="projects-brutal section-padding">
      <div className="projects-container">
        {/* Section header */}
        <div className="projects-header">
          <span className="text-label">Proceso</span>
          <h2 className="section-title font-mono">C&Oacute;MO TRABAJAMOS</h2>
        </div>

        {/* Steps grid */}
        <div className="projects-grid">
          {steps.map((step, index) => (
            <div key={index} className="project-card">
              <span className="project-number font-mono">{step.number}</span>
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title font-mono">{step.title}</h3>
                </div>
                <p className="project-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
