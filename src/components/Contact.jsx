import { Telephone, Envelope, Linkedin } from 'react-bootstrap-icons';

export const Contact = () => {
  const contactLinks = [
    {
      icon: <Envelope size={20} />,
      label: "Email",
      value: "dnmstudio@outlook.es",
      href: "mailto:dnmstudio@outlook.es"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "DNM Studio",
      href: "https://www.linkedin.com/company/dnm-studio/"
    },
    {
      icon: <Telephone size={20} />,
      label: "Tel\u00e9fono",
      value: "+506 6046-9117",
      href: "tel:+50660469117"
    }
  ];

  return (
    <section id="contact" className="contact-brutal section-padding">
      <div className="contact-container">
        {/* Section header */}
        <div className="contact-header">
          <span className="text-label">Contacto</span>
          <h2 className="section-title font-mono">HABLEMOS</h2>
          <p className="contact-intro">
            Cu&eacute;ntanos sobre tu negocio y te ayudamos a identificar oportunidades de automatizaci&oacute;n. Sin compromiso, sin letra peque&ntilde;a.
          </p>
        </div>

        {/* Contact grid */}
        <div className="contact-grid">
          {/* Contact links */}
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-link-item"
              >
                <span className="contact-icon">{link.icon}</span>
                <div className="contact-link-content">
                  <span className="contact-link-label font-mono">{link.label}</span>
                  <span className="contact-link-value">{link.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="contact-cta">
            <p className="cta-text">
              El primer paso es una conversaci&oacute;n. Escr&iacute;benos y exploremos c&oacute;mo la IA puede trabajar para tu negocio.
            </p>
            <a
              href="mailto:diegoalonsonm@gmail.com"
              className="btn-brutal btn-fill"
            >
              Enviar Mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
