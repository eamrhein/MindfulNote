json.id note.id
json.title note.title
json.body note.body
json.tagIds note.tags.map(&:id)
json.notebookId note.notebook_id
json.updatedAt note.updated_at