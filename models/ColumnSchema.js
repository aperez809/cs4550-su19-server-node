const mongoose = require('mongoose');
const Widget = require('./WidgetSchema');

const columnSchema = mongoose.Schema({
    title: String,
    span: Number,
    widgets: [Widget]
}, {collection: 'Columns'});

module.exports = columnSchema;