const mongoose = require("mongoose");

const calendarSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    // type: {
    //   type: String,
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Calendar", calendarSchema);
