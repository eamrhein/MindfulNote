import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <header className="landing-head">
      <div className="header-content">
        <div className="logo">
          <Link to="/"><h1>Mindfull Note</h1></Link>
        </div>
        <nav className="nav">
          <ul>
            <li className="signup-link">
              <Link to="/signup"> Sign up </Link>
            </li>
            <li>
              <Link to="/login"><div className="login-btn">Login </div></Link>
            </li>
            <li>
              <Link to="/demo">
                <div className="demo-btn">Demo </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section className="landing-body">
      <div className="strip">
        <h1>40% off Mindnote Premier</h1>
      </div>
      <div className="poster">
        <div className="poster-text">
          <h1>Your notes. Organized. Effortless.</h1>
          <h4>Take notes anywhere. Find information faster. Share ideas with anyone. Meeting notes, web pages, projects, to-do lists—with Evernote as your note taking app, nothing falls through the cracks.</h4>
        </div>
        <div className="poster-img">
          <img src={window.heroIMG} alt="mindful note display" />
        </div>
      </div>
    </section>
    <footer>
      this is the footer
    </footer>
  </div>
);

export default Landing;
