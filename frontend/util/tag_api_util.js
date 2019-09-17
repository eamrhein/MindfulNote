
export const fetchTags = () => (
  $.ajax({
    url: '/api/tags',
  })
);

export const createTag = (tag) => (
  $.ajax({
    url: '/api/tags',
    method: 'POST',
    data: tag,
  })
);

export const deleteTag = (id) => (
  $.ajax({
    url: `/api/tags/${id}`,
    method: 'DELETE',
  })
);
