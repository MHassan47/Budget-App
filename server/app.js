const dotenv = require("dotenv").config();
const express = require("express");
const port = process.env.PORT;

const app = express();
const connectDB = require("./db");
const bodyParser = require("body-parser");

// Connect to Database
connectDB();

// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Separate routes
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);
app.listen(port, () => console.log(`Server started on port ${port}`));
