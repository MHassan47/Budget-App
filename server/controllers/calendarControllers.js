const Calendar = require("../models/CalendarModel");

const addEvent = async (req, res) => {
  const { title, start } = req.body;
  console.log(req.body);
  const user_id = req.user;
  try {
    const newEvent = await Calendar.create({
      user: user_id,
      title,
      start,
    });
    console.log(newEvent);
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const getEvent = async (req, res) => {
  const user_id = req.user;

  try {
    const Events = await Calendar.find({ user: user_id });
    console.log(Events);
    res.json(Events);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

module.exports = {
  addEvent,
  getEvent,
};
