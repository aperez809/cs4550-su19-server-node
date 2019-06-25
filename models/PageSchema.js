const mongoose = require('mongoose');
const Row = require('./RowSchema');

const PageSchema = mongoose.Schema({
    title: String,
    rows: [Row]
}, {collection: 'Pages'});

module.exports = PageSchema;