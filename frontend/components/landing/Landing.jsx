/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <header className="landing-head">
      <div className="header-content">
        <Link to="/">
          <div className="logo">
            <i className="fas fa-brain" />
            <h1>Mindful Note</h1>
          </div>
        </Link>
        <nav className="nav">
          <ul>
            <li className="signup-link">
              <Link to="/signup"> Sign up </Link>
            </li>
            <li>
              <Link to="/login">
                <div className="login-btn">Login </div>
              </Link>
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
      <div className="outer-poster">
        <div className="poster">
          <div className="poster-inner">
            <div className="poster-text">
              <h1>Keep your mind on your notes.</h1>
              <h4>
                Take notes anywhere. Find information faster. Meeting notes, web
                pages, projects, to-do lists—with mindful note as your note
                taking app, will
                <strong>&nbsp; never &nbsp;</strong>
                slip from your mind.
              </h4>
            </div>
            <div className="poster-img">
              <img src={window.heroIMG} alt="mindful note display" />
            </div>
          </div>
        </div>
      </div>
      <div className="crawler">
        <div className="crawler-logo">
          <i className="fas fa-brain" />
        </div>
        <div className="crawler-head">
          <h1>The Details</h1>
        </div>
        <div className="crawler-text">
          <p>
            Mindfulnote is a free note taking app built by Eric Amrhein as an
            Evernote Clone. Feel free to contact me at eamrhein@protonmail.ch
          </p>
          <p>
            This is a fullstack web project built with react/redux and designed
            with a rails backend api. This project utilizes resources such as
            css reset, quill and fontawesome icons.
          </p>
          <p>
            Feel free to checkout the website, either by creating a new account
            or by clicking the demo user button at the top of the screen.
          </p>
        </div>
      </div>
    </section>
    <footer className="landing-footer">
      <div className="logo landing-foot-head">
        <i className="fas fa-brain" />
        <h1>Mindful Note</h1>
      </div>
      <hr />
      <div className="footer-links">
        <span>
          <a href="https://www.github.com/eamrhein">
            <i className="fab fa-github" />
            &nbsp; Github
          </a>
        </span>
        <span>
          <i className="fab fa-linkedin-in" />
          &nbsp;
          <a href="https://www.linkedin.com/in/eamrhein/">LinkedIn</a>
        </span>
        <span>
          <a href="https://www.twitter.com/eamrhein">
            <i className="fab fa-twitter" />
            &nbsp; Twitter
          </a>
        </span>
        <span>
          <a href="http://ericamrhein.com">
            <i className="fas fa-user-circle" />
            Website
          </a>
        </span>
        <span>
          <a href="mailto:eamrhein@protonmail.ch">
            <i className="fas fa-envelope" />
            Email
          </a>
        </span>
      </div>
    </footer>
  </div>
);

export default Landing;
