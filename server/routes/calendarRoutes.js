const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/authMiddleware");
const {
  addEvent,
  getEvent,
  deleteEvent,
} = require("../controllers/calendarControllers");

router.post("/add", verifyJWT, addEvent);
router.get("/", verifyJWT, getEvent);
router.delete("/delete/:id", verifyJWT, deleteEvent);

module.exports = router;
