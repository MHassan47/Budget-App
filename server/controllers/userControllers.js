const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ message: "Please fill fields" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    console.log(user);
    if (user) {
      res.send(201).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    }
  } catch (err) {
    res.send(400).json({ message: "failed" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const comparePassword = bcrypt.compareSync(password, user.password);
    console.log(comparePassword);
    if (user && comparePassword) {
      res.status(200).json({
        emai: user.email,
      });
    } else {
      res.status(400).json({ message: "incorrect credentials" });
    }
  } catch (err) {
    res.status(400).json({ message: "login failed" });
  }
};

const updateUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const deleteUser = (req, res) => {
  res.json({ message: "user deleted" });
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
