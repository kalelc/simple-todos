20.times do
  Todo.create(title: Faker::Book.title, done: false)
end
