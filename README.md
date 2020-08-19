[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Mindfulnote
## An Evernote clone built on React/Redux, Ruby on Rails and hosted on Heroku
### Live Site: https://mindfull-note.herokuapp.com/
<div>
  <p>Mindfulnote is a note taking website that allows users to take notes and create written documents. It was built in 2 weeks.</p>
  <p>User's can create notes, edit notes, create notebooks to organize notes and tag them to help with organization. </p>
</div>

## Key Features
+ Notes
  + Create and Edit notes in real time.
  + Documents are already Saved
  + Rich Text
+ Notebooks
   + Organize Notes By Notebooks.
   + Can Be deleted.
+ Tags
  + Notes can be tagged with a label to better organize them
+ User Authentication
  + Users can create a new account or login with an existing one.
  + Password are hashed using bcrypt and errors are rendered when a form is filled in incorrectly

## Technologies

+ #### Database: [Postgresql](https://www.postgresql.org/)

+ #### Backend: [Ruby on Rails](https://rubyonrails.org/)

+ #### Frontend Components: [React](https://reactjs.org/)

+ #### Frontend State: [Redux](https://redux.js.org/)

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
