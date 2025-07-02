import userModel from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    if (!password || (!email && !phone)) {
      res.json({ success: false, msg: "Missing Required Fields" });
    }

    const user = email
      ? await userModel.findOne({ email })
      : await userModel.findOne({ phone });

    if (!user) {
      res.json({ success: false, msg: "User does not exist" });
    }

    const comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass) {
      res.json({ success: false, msg: "Passwords dont match" });
    }

    const token = createToken(user._id);
    res.json({ success: false, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export { loginUser, registerUser };
