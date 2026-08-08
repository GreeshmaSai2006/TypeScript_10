
const express = require('express');

const app = express();

const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Express.js Server!');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

// API Status route
app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "This server is responding to requests"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});