const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/authMiddleware");
const { addCard, getPrimaryCard } = require("../controllers/cardControllers");

router.post("/add", verifyJWT, addCard);
router.get("/primary", verifyJWT, getPrimaryCard);
// router.get("/", verifyJWT, getAllCard);

module.exports = router;
