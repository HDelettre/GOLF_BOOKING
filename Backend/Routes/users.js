// EXPRESS
const express = require('express');

// ROUTER
const router = express.Router();

// PATH TO CONTROLLERS
const signupCtrl = require('../Controllers/Authentification/signup');
const loginCtrl = require('../Controllers/Authentification/login');

// MIDDLEWARES AUTHENTIFICATION
router.post('/signup', signupCtrl.createUser);
router.post('/login', loginCtrl.loginUser);

// EXPORTS
module.exports = router;