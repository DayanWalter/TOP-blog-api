const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 30,
    unique: true,
  },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  isAuthor: { type: Boolean, default: false },
});

// Virtual for URL
UserSchema.virtual('url').get(function () {
  return `/user/${this._id}`;
});

module.exports = mongoose.model('User', UserSchema);
