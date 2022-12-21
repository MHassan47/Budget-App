const Transaction = require("../models/transactionModel");
// const User = require("../models/userModel");
const mongoose = require("mongoose");

const addTransaction = async (req, res) => {
  const { type, category, name, amount } = req.body;
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

const getMonthlyTransactions = async (req, res) => {
  const user_id = req.user;
  try {
    const monthlyTransactions = await Transaction.aggregate([
      {
        $match: { user: mongoose.Types.ObjectId(user_id) },
      },
      {
        $group: {
          _id: {
            type: "$type",
            year: { $year: { $toDate: "$createdAt" } },
            month: {
              $month: { $toDate: "$createdAt" },
            },
            day: {
              $dayOfMonth: { $toDate: "$createdAt" },
            },
          },
          amount: { $sum: "$amount" },
        },
      },
    ]);

    res.status(200).json(monthlyTransactions);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const deleteTransaction = async (req, res) => {
  // console.log(req.params.id);

  try {
    const transaction = await Transaction.findById({ _id: req.params.id });
    console.log("click");
    await transaction.remove();
    res.json({ message: "done" });
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

module.exports = {
  addTransaction,
  getPreviewTransactions,
  getAllTransactions,
  getMonthlyTransactions,
  deleteTransaction,
};
