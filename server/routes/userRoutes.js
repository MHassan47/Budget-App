const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
