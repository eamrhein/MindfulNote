# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create(email: "demo@demo.com", password: "123456")
demo_notebook = Notebook.create(title: "demobook", author_id: demo_user.id)
Note.create(title: "demo note", body: "“It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair.”", notebook_id: demo_notebook.id, author_id: demo_user.id)
Note.create(title: "Sandy", body: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife", notebook_id: demo_notebook.id, author_id: demo_user.id)