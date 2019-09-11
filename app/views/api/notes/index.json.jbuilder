@notes.each do |note|
  json.set! note.id do
    json.partial! "api/notes/notes", note: note
  end
end