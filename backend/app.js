// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Different port than the frontend

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submission
app.post('/subscribe', (req, res) => {
    const email = req.body.email;

    // For simplicity, just log the email
    console.log(`Received subscription request for: ${email}`);

    res.json({ message: `Thank you, ${email}, for subscribing!` });
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
