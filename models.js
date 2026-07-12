const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // Changed from username to email
  password: { type: String, required: true }
});

const NoteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  isPinned: { type: Boolean, default: false },
  color: { type: String, default: '#ffffff' }
}, { timestamps: true });

module.exports = {
  User: mongoose.model('User', UserSchema),
  Note: mongoose.model('Note', NoteSchema)
};