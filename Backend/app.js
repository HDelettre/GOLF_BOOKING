// EXPRESS
const express = require("express");

// DOTENV
require("dotenv").config({
  path: "./config/.env"
});

// ROUTES
const authRoutes = require('./Routes/users');

// MONGODB
require('./Config/mongodb');

const app = express();

app.use("/Pictures", express.static(__dirname + "/Pictures"));

// HELMET

// RATE LIMITER

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

// ROUTES CALLING
app.use('/api/auth', authRoutes);

// EXPORTS
module.exports = app;