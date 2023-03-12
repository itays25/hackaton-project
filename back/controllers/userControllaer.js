const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  const { email, id } = req.body;
  try {
    const accessToken = jwt.sign(
      {
        id,
        email,
      },
      process.env.JWT_SEC,
      { expiresIn: "30d" }
    );
    res.status(200).json(accessToken);
  } catch (err) {
    res.status(500).json(err);
  }
};

