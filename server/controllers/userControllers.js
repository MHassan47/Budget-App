const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  try {
    if (!firstName || !lastName || !email || !password) {
      return res.statusstatus(401).json({ message: "Please fill fields" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(401).json({ message: "user already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    console.log(user);
    if (user) {
      res.status(200).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profile_picture: user.profilePicture,
        token: generateToken(user._id),
      });
    }
  } catch (err) {
    res.status(401).json({ message: "failed" });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // const email = req.body.email;
  // const password = req.body.password;
  console.log(email, password);
  try {
    const user = await User.findOne({ email });

    const comparePassword = bcrypt.compareSync(password, user.password);

    console.log(user);
    if (user && comparePassword) {
      res.status(200).json({
        _id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture: user.profilePicture,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "incorrect credentials" });
    }
  } catch (err) {
    res.status(400).json({ message: "login failed" });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(401).json({ message: "user not you" });
    } else {
      delete user.password;
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

const updateUser = async (req, res) => {
  const { firstName, lastName, email, currentPassword, newPassword } = req.body;
  const user_id = req.user;
  try {
    const user = await User.findById({ _id: req.user });

    const comparePassword = bcrypt.compareSync(currentPassword, user.password);

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(401).json({ message: "Email is taken" });
    }

    if (!comparePassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    if (user && !userExists && comparePassword) {
      const hashedPassword = bcrypt.hashSync(newPassword, 10);
      const updatedUser = await User.updateOne(
        { user: mongoose.Types.ObjectId(user_id) },
        {
          $set: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
          },
        }
      );
      console.log(updatedUser);

      res.status(200).json({
        _id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture: user.profilePicture,
        token: generateToken(user._id),
      });
    }
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
  getMe,
  updateUser,
  deleteUser,
};
