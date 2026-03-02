const About = () => {
  return (
    <section id="servicios" className="about-brutal section-padding">
      <div className="about-container">
        {/* Section header */}
        <div className="about-header">
          <span className="text-label">Servicios</span>
          <h2 className="section-title font-mono">LO QUE HACEMOS</h2>
        </div>

        {/* Main content - two column layout */}
        <div className="about-grid">
          {/* Left column - Main text */}
          <div className="about-text">
            <p>
              Somos una <span className="text-accent">AI Automation Agency</span>. Tomamos las herramientas y datos que tu negocio ya utiliza y les sumamos inteligencia artificial para <span className="text-accent">resolver problemas reales</span>.
            </p>
            <p>
              No vendemos tecnolog&iacute;a por vender. Cada soluci&oacute;n que implementamos est&aacute; dise&ntilde;ada para generar un impacto medible: <span className="text-accent">menos horas manuales</span>, mejor atenci&oacute;n al cliente y <span className="text-accent">m&aacute;rgenes m&aacute;s altos</span>.
            </p>
            <p>
              Desde automatizaciones con <span className="text-accent">n8n</span> y APIs hasta agentes de IA con <span className="text-accent">LangChain</span> y RAGs, construimos soluciones que se integran con tu operaci&oacute;n actual sin fricci&oacute;n.
            </p>
          </div>

          {/* Right column - Quick facts */}
          <div className="about-facts">
            <div className="fact-item">
              <span className="fact-label">Modelo</span>
              <span className="fact-value">Cobro basado en valor, no por hora</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Entregables</span>
              <span className="fact-value">Soluci&oacute;n + documentaci&oacute;n completa + soporte</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">Garant&iacute;a</span>
              <span className="fact-value">2 semanas de acompa&ntilde;amiento post-entrega incluidas</span>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="about-focus">
          <h3 className="focus-title font-mono">NUESTROS SERVICIOS</h3>
          <div className="focus-grid">
            <div className="focus-item">
              <span className="focus-number font-mono">01</span>
              <div className="focus-content">
                <h4>Auditor&iacute;a de Procesos</h4>
                <p>Diagn&oacute;stico de tus operaciones para identificar oportunidades de automatizaci&oacute;n. Entregamos un roadmap con las herramientas recomendadas y el ROI esperado de cada implementaci&oacute;n.</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-number font-mono">02</span>
              <div className="focus-content">
                <h4>Automatizaci&oacute;n de Procesos</h4>
                <p>Eliminamos tareas manuales conectando tus sistemas con n8n, webhooks y APIs. Desde sincronizaci&oacute;n de inventarios hasta automatizaci&oacute;n de gastos y facturaci&oacute;n.</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-number font-mono">03</span>
              <div className="focus-content">
                <h4>Agentes de IA</h4>
                <p>Desarrollamos agentes inteligentes para extracci&oacute;n de datos de documentos, chatbots de atenci&oacute;n al cliente y procesamiento automatizado de informaci&oacute;n cr&iacute;tica para tu negocio.</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-number font-mono">04</span>
              <div className="focus-content">
                <h4>Soluciones a Medida</h4>
                <p>Creamos RAGs, wrappers de LLMs y herramientas internas potenciadas con IA, dise&ntilde;adas espec&iacute;ficamente para las necesidades de tu negocio con bases de datos vectoriales y modelos propios.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
