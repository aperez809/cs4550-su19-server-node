const mongoose = require('mongoose');
const widgetSchema = require('./WidgetSchema');
const widgetModel = mongoose.model('widgetModel', widgetSchema);

module.exports = widgetModel;