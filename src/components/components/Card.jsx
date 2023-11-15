import React from 'react'
import { Github } from 'react-bootstrap-icons'
import { WindowDesktop } from 'react-bootstrap-icons'

const CardComponent = ({ title, description, githubLink, appLink, techStack, image }) => {
  return (
    <div className='container p-4'>
      <div className="row">
        <div className="col-12 col-md-6">
          <h4 className='text-info'>
            {title}
          </h4>
          <div className='text-success mt-3'>
            {description}
          </div>
          <div className='mt-3 mb-5 text-success fw-semibold'>
            Tech Stack
            <div className='mt-1'>
              {techStack.map((tech, index) => (
                <span key={index} className='badge bg-warning text-light mx-1 py-2 my-1'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img className='img-fluid' src={image} alt={title} />
          <div className='mt-3'>
            <a href={githubLink} target='_blank' className='me-2 text-secondary'>
              <Github size={26} />
            </a>
            <a href={appLink} target='_blank' className='ms-2 text-secondary'>
              <WindowDesktop size={26} />
            </a>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default CardComponent