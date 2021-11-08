const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/user-route');

const helmet = require('helmet');

const app = express();

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/images', express.static(path.join(__dirname, 'images')));

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Routes
app.use('/api/users', usersRoutes);

module.exports = app;


