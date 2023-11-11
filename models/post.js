const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  visible: { type: Boolean },
});

// Virtual for URL
PostSchema.virtual('url').get(function () {
  return `/post/${this._id}`;
});

// Virtual for formatted timestamp
PostSchema.virtual('timestamp_formatted').get(function () {
  // We don't use an arrow function as we'll need the this object
  return DateTime.fromJSDate(this.timestamp).toLocaleString(
    DateTime.DATETIME_MED
  );
});

module.exports = mongoose.model('Post', PostSchema);
