const mongoose = require('mongoose');
const widgetSchema = require('./widget.schema.server');
const widgetModel = mongoose.model('widgetModel', widgetSchema);

module.exports = widgetModel;