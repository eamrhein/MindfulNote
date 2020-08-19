[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Mindfulnote
## An Evernote clone built on React/Redux, Ruby on Rails and hosted on Heroku
### Live Site: https://mindfull-note.herokuapp.com/
<div>
  <p>Mindfulnote is a note taking website that allows users to take notes and create written documents. It was built in 2 weeks.</p>
  <p>User's can create notes, edit notes, create notebooks to organize notes and tag them to help with organization. </p>
</div>

## Technologies

+ #### Database: [Postgresql](https://www.postgresql.org/)

+ #### Backend: [Ruby on Rails](https://rubyonrails.org/)

+ #### Frontend Components: [React](https://reactjs.org/)

+ #### Frontend State: [Redux](https://redux.js.org/)

## Features

+ Secure user authentication built with rails and BCrypt. passwords are salted and hashed preventing password data from being compromised.

+ Rich-text editor that allows user to edit text

+ Organize Notes in notebook collections

+ Tag Notes with Descriptive tags.

## Code Features

#### Auto Saving using an Async callback event handler

```javascript

class NoteDetailForm extends React.Component {
  constructor(props) {
    super(props)
    ...
    this.timeout = 0;
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.changeNote = this.changeNote.bind(this);
  }
  ...
  handleSubmit() {
      const { updateNote } = this.props;
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        updateNote(this.state);
      }, 1000);
    }
 }

````
