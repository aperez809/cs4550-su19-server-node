const mongoose = require('mongoose');
const Row = require('./row.schema.server');

const userSchema = mongoose.Schema({
    title: String,
    rows: [Row]
}, {collection: 'Users'});

module.exports = userSchema;