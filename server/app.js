const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const path = require("path");
const logger = require("morgan");
const app = express();
const connectDB = require("./db");
const bodyParser = require("body-parser");

// Connect to Database
connectDB();
// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Separate routes
const userRouter = require("./routes/userRoutes");
const { connect } = require("http2");

app.use("/api/users", userRouter);
app.listen(port, () => console.log(`Server started on port ${port}`));
