const mongoose = require('mongoose');
const Column = require('./column.schema.server');

const rowSchema = mongoose.Schema({
    title: String,
    columns: [Column]
}, {collection: 'Rows'});

module.exports = rowSchema;