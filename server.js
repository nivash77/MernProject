// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbconn = require('./config/db'); // Ensure DB connection is established

// Import routers
const ProjectsRouter = require('./routes/ProjectRouter');
const DishesRouter = require('./routes/DishRouter');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 7778;

// Set up routes
app.use('/projects', ProjectsRouter);
app.use('/dishes', DishesRouter); // Add dishes route

app.get('/', (req, res) => {
    res.json({ message: "Welcome" });
});

app.listen(port, () => { 
    console.log(`Server running on port: ${port}`);
});