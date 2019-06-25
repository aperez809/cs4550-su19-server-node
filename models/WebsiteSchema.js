const mongoose = require('mongoose');
const User = require('./user.schema.server');
const Page = require('./page.schema.server');
const WebsiteSchema = mongoose.Schema({
    title: String,
    author: User,
    pages: [Page]
}, {collection: "Pages"});

module.exports = WebsiteSchema;