const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {type: String, required:true},
    password: String,
    firstName: String,
    lastName: String,
}, {collection: 'Users'});

module.exports = userSchema;