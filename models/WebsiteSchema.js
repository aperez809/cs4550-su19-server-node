const mongoose = require('mongoose');
const User = require('./UserSchema');
const Page = require('./PageSchema');
const WebsiteSchema = mongoose.Schema({
    title: String,
    author: User,
    pages: [Page]
}, {collection: "Websites"});

module.exports = WebsiteSchema;