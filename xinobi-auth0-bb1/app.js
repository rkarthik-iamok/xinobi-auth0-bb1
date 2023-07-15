// Required Imports
const express = require('express');
const webLogger = require('morgan');
const indexRouter = require('./router/index');
const path = require('path');
require('dotenv').config();


// Variables
const WEBAPP_PORT = process.env.WEBAPP_PORT || 8000;
const WEBAPP_NAME = process.env.WEBAPP;


// Create Express App
const app = express();


// Express Middleware

// Set the View Engine
app.set('views', 'views');                      // Declares that views are present in the views folder
app.set('view engine', 'ejs');                  // Use the Ejs for view engine


app.use(express.json());                        // Parse json
app.use(express.urlencoded({extended: true}));  // handles urlencoded data in query strings, extended handles it for nested data
app.use('/static', express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

app.listen(WEBAPP_PORT, '0.0.0.0', () => {
    console.log(`${WEBAPP_NAME} is listening on port ${WEBAPP_PORT}`);
});