const express = require('express');
const app = express();
app.use(express.json());

let todos = [
  { id: 1, task: "Learn backend", done: false },
  { id: 2, task: "Build API", done: false }
];

app.get('/', (req, res) => {
  res.send("Welcome to the To-Do API! Use /api/todos to access todos.");
});


app.get('/api/todos', (req, res) => {
  res.json(todos);
});


app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  todo ? res.json(todo) : res.status(404).json({ message: "Not found" });
});


app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    done: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});


app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Not found" });
  
  todo.task = req.body.task || todo.task;
  todo.done = req.body.done ?? todo.done;
  res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: "Todo deleted" });
});


app.listen(3000, () => console.log("Server running on http://localhost:3000"));
