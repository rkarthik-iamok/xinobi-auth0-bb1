const router = require('express').Router();
const dotenv = require('dotenv');
const path = require('path');

const env_path = path.resolve(__dirname, '../.env');
dotenv.config({path: env_path});

const APP_NAME = process.env.WEBAPP || "Sample Project";


router.get('/', (req, res) => {

    const isAuthenticated = req.oidc.isAuthenticated();

    res.render('index', {
        title: APP_NAME,
        loggedIn: isAuthenticated,
        user: req.oidc.user
    });
});

module.exports = router;