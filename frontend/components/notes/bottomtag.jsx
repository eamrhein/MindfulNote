/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
import React from 'react';
import BottomTagItem from './bottomtag_item'
import * as tagging from '../../util/tagging_api_util';
import * as tagUtil from '../../util/tag_api_util';
import { receiveTag } from '../../actions/tag_actions';

class BottomTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
  }

  change(e) {
    this.setState({ name: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    const { noteId, fetchTags } = this.props;
    const { name } = this.state;
    tagUtil.createTag({ tag: { name } })
      .then((received) => {
        tagging.linkNotetoTag(noteId, received.id);
        fetchTags();
        receiveTag(received);
      }).then(() => {
        fetchTags();
        this.setState({ name: '' });
      });
  }

  render() {
    const { name } = this.state;
    const { tags, noteId, fetchTags } = this.props;
    const tagItems = tags
      .map((tag) => (
        <BottomTagItem
          key={tag.id}
          fetchTags={fetchTags}
          noteId={noteId}
          unlink={tagging.unlinkNotetoTag}
          tag={tag}
        />
      ));
    return (
      <>
        <div className="tagbar">
          {tagItems}
          <form onSubmit={this.submit}>
            <input
              type="text"
              onChange={this.change}
              value={name}
              placeholder="Add a Tag..."
            />
          </form>
        </div>
      </>
    );
  }
}

export default BottomTag;
