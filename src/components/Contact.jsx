import { Telephone, Envelope, Linkedin, Github } from 'react-bootstrap-icons';

import DiegoCV from '../assets/pdf/DiegoCV.pdf'

export const Contact = () => {
  const contactLinks = [
    {
      icon: <Envelope size={20} />,
      label: "Email",
      value: "diegoalonsonm@gmail.com",
      href: "mailto:diegoalonsonm@gmail.com"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Diego Naranjo",
      href: "https://www.linkedin.com/in/diegonaranjo03/"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "diegoalonsonm",
      href: "https://github.com/diegoalonsonm"
    },
    {
      icon: <Telephone size={20} />,
      label: "Phone",
      value: "+506 6046-9117",
      href: "tel:+50660469117"
    }
  ];

  return (
    <section id="contact" className="contact-brutal section-padding">
      <div className="contact-container">
        {/* Section header */}
        <div className="contact-header">
          <span className="text-label">Get in Touch</span>
          <h2 className="section-title font-mono">LET'S CONNECT</h2>
          <p className="contact-intro">
            I'm always open to discussing new opportunities, innovative projects,
            or interesting challenges. Feel free to reach out.
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
              Looking for my full resume?
            </p>
            <a
              href={DiegoCV}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-fill"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
