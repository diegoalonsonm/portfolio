const SLA = () => {
  const guarantees = [
    {
      label: "Horario de Soporte",
      value: "7:00 AM \u2013 6:00 PM (hora Costa Rica)"
    },
    {
      label: "Tiempo de Respuesta",
      value: "M\u00e1ximo 12 horas h\u00e1biles"
    },
    {
      label: "Incidencia Cr\u00edtica",
      value: "Resoluci\u00f3n en m\u00e1ximo 36 horas"
    },
    {
      label: "Incidencia Media",
      value: "Resoluci\u00f3n en m\u00e1ximo 3 d\u00edas h\u00e1biles"
    },
    {
      label: "Incidencia Baja",
      value: "Resoluci\u00f3n en m\u00e1ximo 7 d\u00edas h\u00e1biles"
    }
  ];

  return (
    <section id="soporte" className="about-brutal section-padding">
      <div className="about-container">
        {/* Section header */}
        <div className="about-header">
          <span className="text-label">Soporte</span>
          <h2 className="section-title font-mono">RESPALDO CONTINUO</h2>
        </div>

        {/* Main content */}
        <div className="about-grid">
          {/* Left column - Description */}
          <div className="about-text">
            <p>
              Cada proyecto incluye <span className="text-accent">documentaci&oacute;n completa</span>: video tutorial de uso, manual para usuarios y documentaci&oacute;n t&eacute;cnica de la soluci&oacute;n.
            </p>
            <p>
              Adem&aacute;s, ofrecemos una ventana de <span className="text-accent">2 semanas de acompa&ntilde;amiento</span> post-entrega donde monitoreamos logs, corregimos ajustes menores y te acompa&ntilde;amos en la integraci&oacute;n a tu operaci&oacute;n diaria.
            </p>
            <p>
              Para operaciones continuas, contamos con <span className="text-accent">contratos de mantenimiento mensual</span> que incluyen monitoreo de infraestructura, gesti&oacute;n de tokens de APIs, control de prompts y reportes de uso.
            </p>
          </div>

          {/* Right column - SLA metrics */}
          <div className="about-facts">
            {guarantees.map((item, index) => (
              <div key={index} className="fact-item">
                <span className="fact-label">{item.label}</span>
                <span className="fact-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment items */}
        <div className="about-focus">
          <h3 className="focus-title font-mono">COMPROMISOS</h3>
          <div className="focus-grid">
            <div className="focus-item">
              <span className="focus-number font-mono">01</span>
              <div className="focus-content">
                <h4>Bug vs. Feature</h4>
                <p>Diferenciamos claramente entre errores del sistema acordado (bugs, que corregimos sin costo adicional) y funcionalidades nuevas (features, que se cotizan por separado).</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-number font-mono">02</span>
              <div className="focus-content">
                <h4>Transparencia en Costos</h4>
                <p>Los costos de APIs y servicios en la nube son del cliente. Gestionamos los l&iacute;mites de consumo seg&uacute;n lo acordado para que no haya sorpresas en la facturaci&oacute;n.</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-number font-mono">03</span>
              <div className="focus-content">
                <h4>IA Responsable</h4>
                <p>Implementamos buenas pr&aacute;cticas como RAGs, validaciones y estructura de prompts para minimizar alucinaciones. El cliente mantiene la revisi&oacute;n final de resultados cr&iacute;ticos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SLA
