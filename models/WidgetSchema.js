const mongoose = require('mongoose');
const Widget = require('./widget.schema.server');

const columnSchema = mongoose.Schema({
    title: String,
    type: {type: String, enum:["HEADER", "HTML"]},
    text: String,
    size: int
}, {collection: 'Widgets'});

module.exports = widgetSchema;