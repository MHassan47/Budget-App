const Calendar = require("../models/CalendarModel");

const addEvent = async (req, res) => {
  const { type, title, start, end } = req.body;
  //   console.log(req.body);
  const user_id = req.user;
  try {
    const newEvent = await Card.create({
      user: user_id,
      type,
      title,
      start,
      end,
    });
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const getEvent = async (req, res) => {
  const user_id = req.user;

  try {
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

module.exports = {
  addEvent,
  getEvent,
};
