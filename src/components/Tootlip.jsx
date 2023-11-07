import React from 'react'

const TootlipComponent = ({text, children}) => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  return (
    <a href="#" data-bs-toggle="tooltip" data-bs-title={`${text}`}>
        {children}
    </a>
  )
}

export default TootlipComponent