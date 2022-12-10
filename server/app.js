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
const cardRoutes = require("./routes/cardRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

app.use("/api/users", userRoutes);
app.use("/api/cards", cardRoutes);
app.use("/api/transactions", transactionRoutes);
app.listen(port, () => console.log(`Server started on port ${port}`));
