const mongoose = require('mongoose');
const rowSchema = require('./RowSchema');
const rowModel = mongoose.model('RowModel', rowSchema);

module.exports = rowModel;