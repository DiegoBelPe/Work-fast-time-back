const mongoose = require('mongoose');
 const bcrypt = require('bcrypt');

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
  isActive: {
    type: Boolean,
    default: false,
  },

}, {
  timestamps: true,
  versionKey: false,
});

UserSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      return next();
    }
    console.log('prev', user.password);
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    console.log('next', user.password);
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model('User', UserSchema);
