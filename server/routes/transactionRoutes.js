const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/authMiddleware");
const {
  addTransaction,
  getPreviewTransactions,
  getAllTransactions,
  getMonthlyTransactions,
} = require("../controllers/transactionControllers");

router.post("/add", verifyJWT, addTransaction);
router.get("/preview", verifyJWT, getPreviewTransactions);
router.get("/", verifyJWT, getAllTransactions);
router.get("/monthly", verifyJWT, getMonthlyTransactions);

module.exports = router;
