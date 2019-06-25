const mongoose = require('mongoose');
const Widget = require('./widget.schema.server');

const columnSchema = mongoose.Schema({
    title: String,
    span: int,
    widgets: [Widget]
}, {collection: 'Columns'});

module.exports = columnSchema;