const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, profilePicture } = req.body;

  try {
    if (!firstName || !lastName || !email || !password || !profilePicture) {
      res.send(401).json({ message: "Please fill fields" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.send(401).json({ message: "user already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profilePicture,
    });
    console.log(user);
    if (user) {
      res.send(201).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profile_picture: user.profilePicture,
      });
    }
  } catch (err) {
    res.send(401).json({ message: "failed" });
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
  getMe,
  updateUser,
  deleteUser,
};
