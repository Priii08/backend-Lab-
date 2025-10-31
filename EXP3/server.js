const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} = require("./todoRepository");

const app = express();
app.use(bodyParser.json());

// Connect to DB
connectDB();

// Routes
app.post("/todos", async (req, res) => {
  try {
    const todo = await createTodo(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/todos", async (req, res) => {
  const todos = await getAllTodos();
  res.json(todos);
});

app.put("/todos/:id", async (req, res) => {
  try {
    const todo = await updateTodo(req.params.id, req.body);
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    await deleteTodo(req.params.id);
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
