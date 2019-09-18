export const linkNotetoTag = (note_id, tag_id) => (
  $.ajax({
    url: '/api/taggings/',
    method: 'POST',
    data: {
      note_id,
      tag_id,
    },
  })
);

export const unlinkNotetoTag = (note_id, tag_id) => (
  $.ajax({
    url: '/api/taggings/0',
    method: 'delete',
    data: {
      note_id,
      tag_id,
    },
  })
);
