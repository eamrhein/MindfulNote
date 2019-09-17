import * as tagAPI from '../util/tag_api_util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveAllTags = (tags) => ({
  type: RECEIVE_ALL_TAGS,
  tags,
});

export const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag,
});

export const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tag,
});

export const createTag = (tag) => (dispatch) => (
  tagAPI.createTag(tag)
    .then((data) => dispatch(receiveTag(data)))
);

export const deleteTag = (id) => (dispatch) => (
  tagAPI.deleteTag(id)
    .then((data) => dispatch(removeTag(data)))
);

export const fetchTags = () => (dispatch) => (
  tagAPI.fetchTags()
    .then((data) => dispatch(receiveAllTags(data)))
);

