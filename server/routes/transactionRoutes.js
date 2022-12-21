const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/authMiddleware");
const {
  addTransaction,
  getPreviewTransactions,
  getAllTransactions,
  getMonthlyTransactions,
  deleteTransaction,
} = require("../controllers/transactionControllers");

router.post("/add", verifyJWT, addTransaction);
router.get("/preview", verifyJWT, getPreviewTransactions);
router.get("/", verifyJWT, getAllTransactions);
router.get("/monthly", verifyJWT, getMonthlyTransactions);
router.delete("/delete/:id", verifyJWT, deleteTransaction);

module.exports = router;
