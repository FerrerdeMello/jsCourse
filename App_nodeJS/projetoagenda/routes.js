const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Home's routes
route.get('/', homeController.index);

// Login's routes
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route;
