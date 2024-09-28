import mongoose from "mongoose";
import User from "../Models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already exists." });
      // console.log("User already exists");
    } else {
      const hashedPassword = await bcryptjs.hash(password, 10);
      const newUser = new User({
        fullname: fullname,
        email: email,
        password: hashedPassword,
      });

      newUser.save().then((result) => {
        res.status(201).json({
          message: "New user created",
          user: {
            fullname: newUser.fullname,
            email: newUser.email,
            password: newUser.password,
          },
        });
      });
    }
  } catch (error) {
    res.status(501).json({ message: "Internal server error" });
    console.log(error.message);
  }
};
export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatched = await bcryptjs.compare(password, user.password);
    if (!user || !isMatched) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
      return res.status(201).json({
        message: "Login successfully",
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
