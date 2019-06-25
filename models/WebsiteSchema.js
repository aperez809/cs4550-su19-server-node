const mongoose = require('mongoose');
const WebsiteSchema = mongoose.Schema({
    title: String
});

module.exports = WebsiteSchema;