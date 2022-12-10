const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    number: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    expiry: {
      type: String,
      required: true,
    },
    cvc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", cardSchema);
