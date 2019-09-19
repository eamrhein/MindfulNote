/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
import React from 'react';
import BottomTagItem from './bottomtag_item';
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

  createNewTag() {
    const { noteId, fetchTags } = this.props;
    const { name } = this.state;
    tagUtil
      .createTag({ tag: { name } })
      .then((received) => {
        tagging.linkNotetoTag(noteId, received.id);
        fetchTags();
        receiveTag(received);
      })
      .then(() => {
        fetchTags();
        this.setState({ name: '' });
      });
  }

  linkExistingTag(tagId) {
    const { noteId, fetchTags, userTags } = this.props;
    tagging
      .linkNotetoTag(noteId, tagId)
      .then(() => {
        fetchTags();
        receiveTag(userTags[tagId]);
      })
      .then(() => {
        fetchTags();
        this.setState({ name: '' });
      });
  }

  submit(e) {
    e.preventDefault();
    const { userTags } = this.props;
    const { name } = this.state;
    if (userTags.every((tag) => tag.name !== name)) {
      this.createNewTag();
    } else {
      const relTag = userTags.find((tag) => tag.name === name)
      this.linkExistingTag(relTag.id);
    }
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
          <i className="fas fa-tags" />
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
