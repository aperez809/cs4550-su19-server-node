const mongoose = require('mongoose');
const userSchema = require('./UserSchema');
const userModel = mongoose.model('UserModel', userSchema);

module.exports = userModel;