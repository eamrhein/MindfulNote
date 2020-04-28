[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<div align="center">
  <h1>Mindfulnote</h1>
<a href="https://mindfull-note.herokuapp.com/">
  <img src="https://user-images.githubusercontent.com/1903468/65346879-a61ae780-db92-11e9-9e43-8543c7f9f42b.gif" width="500px" />
</a>
</div>

Mindfulnote note taking application based on the functionality of Evernote. It allows people to record notes and organize them.

## Technologies
+ #### Database: [Postgresql](https://www.postgresql.org/)
+ #### Backend: [Ruby on Rails](https://rubyonrails.org/)
+ #### Frontend Components: [React](https://reactjs.org/)
+ #### Frontend State: [Redux](https://redux.js.org/)

## Features
+ Secure user authentication built with rails and BCrypt. passwords are salted and hashed preventing password data from being compromised.

<img src="https://user-images.githubusercontent.com/1903468/65346957-d06ca500-db92-11e9-9e22-b424c0a40d19.gif" width="700px" />

+ Rich-text editor that allows user to edit text

<img src="https://user-images.githubusercontent.com/1903468/65346960-d19dd200-db92-11e9-9c6d-2cd8a3adad8b.gif" width="700px" />
+ Organize Notes in notebook collections.
<img src="https://user-images.githubusercontent.com/1903468/65346963-d2ceff00-db92-11e9-8fcc-93ff2650e812.gif" width="700px" />

+ Tag Notes with Descriptive tags.

![part5](https://user-images.githubusercontent.com/1903468/65347541-15dda200-db94-11e9-9c7f-9fb2af1c5761.gif)

## Code Features

#### Auto Saving using an Async callback event handler.

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
