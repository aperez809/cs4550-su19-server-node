const mongoose = require('mongoose');
const columnSchema = require('./ColumnSchema');
const columnModel = mongoose.model('ColumnModel', columnSchema);

module.exports = columnModel;