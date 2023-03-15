const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports.createUser = async (req, res) => {
  const email = req.body.email;
  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      const newUser = await User.create({ email: email });
      return res.status(200).json(newUser);
    } else return res.status(201).json(userExists);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports.checkID = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userId = user._id;
    return res.json({ userId: userId });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
