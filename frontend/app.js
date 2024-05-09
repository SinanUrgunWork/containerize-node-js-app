// frontend/app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Frontend server listening at http://localhost:${port}`);
});
