/* eslint-disable import/prefer-default-export */

export const fetchNotes = () => (
  $.ajax({
    url: '/api/notes',
  })
);

export const fetchNote = (id) => (
  $.ajax({
    url: `/api/notes/${id}`,
  })
);

export const createNote = (note) => (
  $.ajax({
    url: '/api/notes/',
    method: 'POST',
    data: note,
  })
);

export const updateNote = (note) => (
  $.ajax({
    url: `/api/notes/${note.id}`,
    method: 'PATCH',
    data: note,
  })
);

export const deleteNote = (id) => (
  $.ajax({
    url: `/api/notes/${id}`,
    method: 'DELETE',
  })
);
