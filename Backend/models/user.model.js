const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [4, "Name must be at least 4 characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at least 5 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false, //to hide password from the response
    minlength: [7, "Password must be at least 7 characters"],
  },
  dob: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (err) {
    console.log(err);
  }
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

//Export the model
module.exports = mongoose.model("userModel", userSchema);
