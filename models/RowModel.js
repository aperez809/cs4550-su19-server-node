const mongoose = require('mongoose');
const rowSchema = require('./row.schema.server');
const rowModel = mongoose.model('RowModel', rowSchema);

module.exports = rowModel;