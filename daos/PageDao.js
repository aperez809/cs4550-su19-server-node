const pageModel = require('../models/page.model.server');

createPage = (page) => {
    return pageModel.create(page)
}

findPageById = (id) => {
    return pageModel.findById(id); 
}

findPageByCredentials = (un, pw) => {
    return pageModel.findOne({pagename: un, password: pw});
}

findPageByPagename = (un) => {
    return pageModel.findOne({pagename: un});
}

findAllPages = () => {
    return pageModel.find();
}

deletePage = (id) => {
    return pageModel.findByIdAndDelete(id);
}

updatePage = (id, page) => {
    return pageModel.updateOne({_id: id}, {$set: page});
}

module.exports = {
    createPage,
    findAllPages,
    findPageByCredentials,
    findPageByPagename,
    findPageById,
    deletePage,
    updatePage
}