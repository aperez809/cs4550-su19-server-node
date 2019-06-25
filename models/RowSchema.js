const mongoose = require('mongoose');
const Column = require('./row.schema.server');

const rowSchema = mongoose.Schema({
    title: String,
    columns: [Column]
}, {collection: 'Rows'});

module.exports = rowSchema;