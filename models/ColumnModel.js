const mongoose = require('mongoose');
const columnSchema = require('./column.schema.server');
const columnModel = mongoose.model('ColumnModel', columnSchema);

module.exports = columnModel;