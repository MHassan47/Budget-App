const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "please add a first name"],
    },
    lastName: {
      type: String,
      required: [true, "please add a last name"],
    },
    email: {
      type: String,
      required: [true, "please add a email name"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please add a password name"],
    },
    profilePicture: {
      type: String,
      required: [true, "please add a profile picture"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
