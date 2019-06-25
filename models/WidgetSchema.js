const mongoose = require('mongoose');

const widgetSchema = mongoose.Schema({
    title: String,
    type: {type: String, enum:["HEADER", "HTML"]},
    text: String,
    size: Number
}, {collection: 'Widgets'});

module.exports = widgetSchema;