const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/authMiddleware");
const { addEvent, getEvent } = require("../controllers/calendarControllers");

router.post("/add", verifyJWT, addEvent);
router.get("/", verifyJWT, getEvent);
// router.get("/", verifyJWT, getAllCard);

module.exports = router;
