/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import isHotkey from 'is-hotkey';
import { createEditor, Editor, Transforms } from 'slate';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import { withHistory } from 'slate-history';
import { Button, Icon, Toolbar } from './components';
import BottomTagContainer from './bottomtag_container';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};
const LIST_TYPES = ['numbered-list', 'bulleted-list'];

function NoteDetailForm({ note, updateNote }) {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [body, setBody] = useState(
    JSON.parse(localStorage.getItem('content')) || [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ],
  );
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  useEffect(() => {
    if (note.length) {
      setBody(note);
    }
  }, [note]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Slate
        editor={editor}
        value={body}
        onChange={value => {
          setBody(value);
          const content = JSON.stringify(value);
          localStorage.setItem('content', content);
        }}
      >
        <Toolbar>
          <MarkButton format="bold" icon="format_bold" />
          <MarkButton format="italic" icon="format_italic" />
          <MarkButton format="underline" icon="format_underlined" />
          <MarkButton format="code" icon="code" />
          <BlockButton format="heading-one" icon="looks_one" />
          <BlockButton format="heading-two" icon="looks_two" />
          <BlockButton format="block-quote" icon="format_quote" />
          <BlockButton format="numbered-list" icon="format_list_numbered" />
          <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
        />
      </Slate>
    </div>
  );
}

const withPlugins = editor => {
  const { insertData, insertText, isInline } = editor;
};
const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  });

  return !!match;
};
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format).toString()}
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format).toString()}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

// class NoteDetailForm extends React.Component {
//   constructor(props) {
//     super(props);
//     const { note } = this.props;
//     const { title, body, id, notebookId } = note;
//     this.state = {
//       title,
//       body,
//       id,
//       notebookId,
//       focus: false,
//     };
//     this.timeout = 0;
//     this.handleBodyChange = this.handleBodyChange.bind(this);
//     this.focus = this.focus.bind(this);
//     this.unfocus = this.unfocus.bind(this);
//     this.changeNote = this.changeNote.bind(this);
//   }

//   componentDidUpdate(prevProps) {
//     const { note } = this.props;
//     if (prevProps.note.id !== note.id) {
//       this.changeNote(note);
//     }
//   }

//   changeNote(note) {
//     this.setState(note);
//   }

//   handleBodyChange(value) {
//     this.setState({ body: value });
//   }

//   change(field) {
//     return e =>
//       this.setState({
//         [field]: e.target.value,
//       });
//   }

//   handleSubmit() {
//     const { updateNote } = this.props;
//     if (this.timeout) clearTimeout(this.timeout);
//     this.timeout = setTimeout(() => {
//       updateNote(this.state);
//     }, 1000);
//   }

//   focus() {
//     this.setState({ focus: true });
//   }

//   unfocus() {
//     this.setState({ focus: false });
//   }

//   render() {
//     const { title, body, focus } = this.state;
//     return (
//       <div className="note-form-wrapper">
//         <form className="note-form">
//           <input
//             className="form-title"
//             type="text"
//             placeholder="Title"
//             value={title || ''}
//             onChange={this.change('title')}
//             onClick={() => {
//               this.unfocus();
//               this.handleSubmit();
//             }}
//             onKeyUp={() => this.handleSubmit()}
//           />
//           <div
//             className={
//               focus ? 'form-body focused-editor' : 'form-body blurred-editor'
//             }
//           >
//             <QuillConfig
//               value={body || ''}
//               onChange={this.handleBodyChange}
//               theme="snow"
//               onClick={() => {
//                 this.handleSubmit();
//                 this.focus();
//               }}
//               onKeyUp={() => this.handleSubmit()}
//               onFocus={() => this.focus()}
//             />
//           </div>
//         </form>
//         <BottomTagContainer />
//       </div>
//     );
//   }
// }

export default NoteDetailForm;
