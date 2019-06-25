const mongoose = require('mongoose');
const pageSchema = require('./page.schema.server');
const pageModel = mongoose.model('PageModel', pageSchema);

module.exports = pageModel;