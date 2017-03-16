10.times do
  Todo.create(title: Faker::Book.title, done: true)
end
