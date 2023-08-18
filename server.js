const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST request from form submission
app.post('/submit_contact_form', (req, res) => {
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    // Process the data, send emails, etc. (you can use Nodemailer for sending emails)

    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
