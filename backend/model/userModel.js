import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: Number, required: false },
  email: { type: String, required: false, unique: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  address: { type: String, required: true },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
