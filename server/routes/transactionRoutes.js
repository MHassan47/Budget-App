const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/authMiddleware");
const {
  addTransaction,
  getAllTransactions,
} = require("../controllers/transactionControllers");

router.post("/add", verifyJWT, addTransaction);
router.get("/", verifyJWT, getAllTransactions);

module.exports = router;
