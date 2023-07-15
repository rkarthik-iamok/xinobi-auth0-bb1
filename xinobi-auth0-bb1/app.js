const express = require('express');
require('dotenv').config();

const WEBAPP_PORT = process.env.WEBAPP_PORT || 8000;
const WEBAPP_NAME = process.env.WEBAPP;

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello ${WEBAPP_NAME}!`);
})

app.listen(WEBAPP_PORT, '0.0.0.0', () => {
    console.log(`${WEBAPP_NAME} is listening on port ${WEBAPP_PORT}`);
});