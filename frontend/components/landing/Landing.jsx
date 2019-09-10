import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <header className="landing-head">
          <div className="header-content">
            <div className="logo" >
              <a href="#"><h1>Mindfull Note</h1></a>
            </div>
              <nav className="nav">
                <ul>
                  <li className="signup-link">
                  <a href="#">SignUp</a>
                  </li>
                  <li>
                    <div className="login-btn">
                    <a href="#">LogIn</a>
                    </div>
                  </li>
                  <li>
                    <div className="demo-btn">
                    <a href="#">Demo</a>
                    </div>
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
              <img src="/assets/landing_page/homepage-hero-desktop.png" />
            </div>
          </div>
        </section>
        <footer>
           this is the footer
        </footer>
      </div>
    );
  }
}

export default Landing;
