const mongoose = require('mongoose');
const pageSchema = require('./PageSchema');
const pageModel = mongoose.model('PageModel', pageSchema);

module.exports = pageModel;