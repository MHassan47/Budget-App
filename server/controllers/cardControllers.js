const User = require("../models/userModel");
const Card = require("../models/cardModel");

const addCard = async (req, res) => {
  const { number, name, expiry, cvc } = req.body;
  //   console.log(req.body);
  const user_id = req.user;
  try {
    const addCard = await Card.create({
      user: user_id,
      number,
      name,
      expiry,
      cvc,
    });
    res.status(200).json(addCard);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const getPrimaryCard = async (req, res) => {
  const user_id = req.user;

  try {
    const primaryCard = await Card.find({ user: user_id });

    res.json(primaryCard);
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

module.exports = {
  addCard,
  getPrimaryCard,
};
