const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/authMiddleware");
const bcrypt = require("bcryptjs");
const {
  registerUser,
  loginUser,
  getMe,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/me", verifyJWT, getMe);
router.put("/update", verifyJWT, updateUser);
module.exports = router;
