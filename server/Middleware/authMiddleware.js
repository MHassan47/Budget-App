const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verifyJWT = async (req, res, next) => {
  const accessToken = req.headers["access-token"];

  if (!accessToken) {
    return res.status(401).json({ error: "Access denied!" });
  }

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("invalid token", err);
      return res.status(401).json({ error: "invalid Token!" });
    }
    req.user = decoded.id;
    // console.log(req.user);
    next();
  });
  //   req.user = await User.findById(decoded.id).select("-password");
};

module.exports = { verifyJWT };
