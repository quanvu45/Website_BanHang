const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    passwordHash: String,
    role: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', userSchema);
