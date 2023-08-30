const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set up routes
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const servicesRoute = require('./routes/services');
const contactRoute = require('./routes/contact');

app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/services', servicesRoute);
app.use('/contact', contactRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
