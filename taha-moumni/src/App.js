import React from 'react';
import './App.css';
import About from './components/about.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Taha Moumni</h1>
        <p>Web Developer & Designer</p>
      </header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Taha Moumni</p>
      </footer>
    </div>
  );
};

export default App;
