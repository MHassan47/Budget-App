const Calendar = require("../models/CalendarModel");

const addEvent = async (req, res) => {
  const { title, start } = req.body;
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

    res.json(Events);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const deleteEvent = async (req, res) => {
  // console.log(req.params.id);

  try {
    const event = await Calendar.findById({ _id: req.params.id });
    await event.remove();
    res.json({ message: "done" });
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

module.exports = {
  addEvent,
  getEvent,
  deleteEvent,
};
