const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  isActive:{
    type: Boolean,
    default: false,
  }

}, {
  timestamps: true,
  versionKey: false,
})

module.exports = mongoose.model('User', UserSchema);
