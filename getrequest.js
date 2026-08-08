const express = require('express');

const app = express();

const PORT = 3000;



app.get('/user/:id', (req, res) => {

    // Express stores route parameters in req.params
    const userId = req.params.id;

    res.send(`User Profile: You are viewing the profile for User ID: ${userId}`);
});




app.get('/flights/:from/:to', (req, res) => {

    // Get multiple parameters from req.params
    const { from, to } = req.params;

    res.send(`Searching for flights departing from ${from} and arriving at ${to}.`);
});



app.get('/search', (req, res) => {

    // Access query parameters using req.query
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});