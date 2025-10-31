const Todo = require("./Todo");

// Create
async function createTodo(data) {
  const todo = new Todo(data);
  return await todo.save();
}

// Read
async function getAllTodos() {
  return await Todo.find();
}

// Update
async function updateTodo(id, data) {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
}

// Delete
async function deleteTodo(id) {
  return await Todo.findByIdAndDelete(id);
}

module.exports = { createTodo, getAllTodos, updateTodo, deleteTodo };
