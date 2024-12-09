import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built with React showcasing my web development skills.</p>
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Online Car Garage Management</h3>
          <p>A website to manage car garage services, built with PHP and React.</p>
          <a href="https://cars-space.netlify.app" target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
