const router = require('express').Router();
const dotenv = require('dotenv');
const path = require('path');

const env_path = path.resolve(__dirname, '../.env');
console.log(env_path);
dotenv.config({path: env_path});

const APP_NAME = process.env.WEBAPP || "Sample Project";


router.get('/', (req, res) => {
    res.render('index', {
        title: APP_NAME
    });
});

module.exports = router;