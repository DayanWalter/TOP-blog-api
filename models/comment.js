const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
});

// Virtual for URL
CommentSchema.virtual('url').get(function () {
  return `/comment/${this._id}`;
});

// Virtual for formatted timestamp
CommentSchema.virtual('timestamp_formatted').get(function () {
  // We don't use an arrow function as we'll need the this object
  return DateTime.fromJSDate(this.timestamp).toLocaleString(
    DateTime.DATETIME_MED
  );
});

module.exports = mongoose.model('comment', CommentSchema);
