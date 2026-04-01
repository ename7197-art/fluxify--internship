const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev')); // Logging
app.use(express.json()); // Body parsing

// Routes
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Express Server!" });
});

app.get('/about', (req, res) => {
  res.json({ info: "This is a Day 3 backend task." });
});

app.post('/data', (req, res) => {
  const body = req.body;
  res.status(201).json({ received: body });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId: userId, status: "Active" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});