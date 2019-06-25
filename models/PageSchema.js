const mongoose = require('mongoose');
const Row = require('./row.schema.server');

const PageSchema = mongoose.Schema({
    title: String,
    rows: [Row]
}, {collection: 'Pages'});

module.exports = PageSchema;