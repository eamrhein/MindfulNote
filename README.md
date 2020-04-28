[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<div align="center">
  <h1>Mindfulnote</h1>
<a href="https://mindfull-note.herokuapp.com/">
  <img src="https://user-images.githubusercontent.com/1903468/65346879-a61ae780-db92-11e9-9e43-8543c7f9f42b.gif" height="450px" />
</a>
<p>Mindfulnote note taking application based on the functionality of Evernote. It allows people to record notes and organize them.</p>
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

+Tag Notes with Descriptive tags.

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
