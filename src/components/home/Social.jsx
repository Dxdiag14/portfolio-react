import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com" className="home__social-icon" target="_blank" rel="noopener noreferrer" aria-label="github" >
        <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://linkedin.com/" className="home__social-icon" target="_blank" rel="noopener noreferrer" aria-label="linkedin" >
        <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://www.behance.com/" className="home__social-icon" target="_blank" rel="noopener noreferrer" aria-label="behance" >
        <i className="uil uil-behance-alt"></i>
        </a>
    </div>
  )
}

export default Social