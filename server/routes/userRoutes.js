const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers.js");

router.get("/", loginUser);
router.post("/", registerUser);

module.exports = router;
