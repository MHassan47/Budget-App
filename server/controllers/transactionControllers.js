const Transaction = require("../models/transactionModel");

const addTransaction = async (req, res) => {
  const { type, name, amount } = req.body;
  const user_id = req.user;

  try {
    const newTransaction = await Transaction.create({
      user: req.user,
      type,
      category,
      name,
      amount,
    });

    res.status(200).json(newTransaction);
  } catch (err) {
    res.json({ message: err });
  }
};

const getPreviewTransactions = async (req, res) => {
  const user_id = req.user;
  try {
    const allTransactions = await Transaction.find({ user: user_id })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json(allTransactions);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const getAllTransactions = async (req, res) => {
  const user_id = req.user;
  try {
    const allTransactions = await Transaction.find({ user: user_id }).sort({
      createdAt: -1,
    });

    res.status(200).json(allTransactions);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

module.exports = {
  addTransaction,
  getPreviewTransactions,
  getAllTransactions,
};
