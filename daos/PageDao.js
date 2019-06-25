const pageModel = require('../models/page.model.server');
const websiteModel = require('../models/website.model.server');

createPage = (websiteId, page) => {
    //createdPage = pageModel.create(page);
    return websiteModel.updateOne({_id: websiteId}, {$push: {pages: page}});
    //return pageModel.create(page)
}

findPageById = (websiteId, pageId) => {
    //need to chain find operations to get page from pages array
    return websiteModel.find({_id: websiteId}, {pages: {_id: pageId}});
    //return websiteModel.find({_id: websiteId}, {pages: 1});
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

deletePage = (websiteId, pageId) => {
    return websiteModel.update({_id: websiteId}, {$pull: {pages: {_id: pageId}}});
}

updatePage = (websiteId, pageId, pa) => {
    //figure this out lol
    return websiteModel.updateOne({_id: websiteId, pages: {_id: pageId}});
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