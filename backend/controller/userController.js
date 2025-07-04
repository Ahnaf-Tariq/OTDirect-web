import userModel from "../model/userModel.js";
import validator from "validator";
import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    if (!password || (!email && !phone)) {
      return res.json({ success: false, msg: "Missing Required Fields" });
    }

    const user = email
      ? await userModel.findOne({ email })
      : await userModel.findOne({ phone });

    // user exist or not
    if (!user) {
      return res.json({ success: false, msg: "User does not exist" });
    }

    // compare password
    const comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass) {
      return res.json({ success: false, msg: "Passwords dont match" });
    }

    // token sign
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { fullName, email, phone, password, location, address } = req.body;

    if (!fullName || !password || !location || !address || (!email && !phone)) {
      return res.json({ success: false, msg: "Missing Required Fields" });
    }

    // email exists
    if (email) {
      const emailExist = await userModel.findOne({ email });
      if (emailExist) {
        return res.json({ success: false, msg: "Email already in use" });
      }
      if (!validator.isEmail(email)) {
        return res.json({ success: false, msg: "Invalid Email" });
      }
    }

    // phone exists
    if (phone) {
      const phoneExist = await userModel.findOne({ phone });
      if (phoneExist) {
        return res.json({ success: false, msg: "Phone number already in use" });
      }
    }

    // strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        msg: "Please enter a strong password",
      });
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    // model create
    const user = await userModel.create({
      fullName,
      email,
      phone,
      password: hashPass,
      location,
      address,
    });

    // token sign
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export { loginUser, registerUser };
