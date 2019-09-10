import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <header className="splash-head">
            <a href="#">Logo</a>
            <nav>
              <ul>
                <li>SignUp</li>
                <li>LogIn</li>
                <li>Demo Login</li>
              </ul>
            </nav>
        </header>
        <section>
          this is the body
        </section>
        <footer>
           this is the footer
        </footer>
      </div>
    );
  }
}

export default Landing;
