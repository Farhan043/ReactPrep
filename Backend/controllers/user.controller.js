const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');
const {  validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');
const sendMail = require('../utils/emailService');
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();



module.exports.register = async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
    
            const { name, email, password, dob, role } = req.body;
    
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
    
            const hashedPassword = await userModel.hashPassword(password);     
    
            const User = await userService.createUser({ name, email, password: hashedPassword, dob, role });
    
            const token = await User.generateAuthToken();
            return res.status(201).json({ message: 'User registered successfully', token , User });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }



    module.exports.login = async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
      
        const { email, password } = req.body;
      
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
          return res.status(401).json({ message: 'Invalid Email or Password' });
        }
      
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid Email or Password' });
        }
        const token = await user.generateAuthToken();
        res.cookie('token', token)
        res.status(200).json({ message: `Welcome ${user.name}`, token, user });
      }



      module.exports.getUserProfile = async (req, res) => {
        try {
          const user = req.user; // `req.user` is set by the `authUser` middleware
          res.status(200).json({ user });
        } catch (error) {
          console.error("Error fetching user profile:", error);
          res.status(500).json({ message: "Server error" });
        }
      };
      
      //Logout
      module.exports.logoutUser = async (req, res, next) => {
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        await blackListTokenModel.create({ token });
        res.status(200).json({ message: 'Logout Successfully' });
      }


     module.exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const otp = generateOTP();
  user.otp = otp;
  user.otpExpiry = Date.now() + 10 * 60 * 1000;
  await user.save();

  await sendMail(email, 'Password Reset OTP', `Your OTP is: ${otp}`);
  res.json({ message: 'OTP sent to email' });
};

module.exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  const user = await userModel.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  user.password = await userModel.hashPassword(newPassword);
  user.otp = undefined;
  user.otpExpiry = undefined;
  await user.save();

  res.json({ message: 'Password reset successful' });
};
