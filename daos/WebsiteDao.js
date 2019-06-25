const WebsiteModel = require('../models/WebsiteModel');

const createWebsite = (website) => {
    return WebsiteModel.create(website);
}

const findAllWebsites = () => {
    return WebsiteModel.find();
}

const findWebsiteById = (websiteId) => {
    return WebsiteModel.findById(websiteId);
}

const deleteWebsite = (websiteId) =>
    WebsiteModel.deleteOne({_id: websiteId});

const updateWebsite = (websiteId, newWebsite) =>
    WebsiteModel.update(
        {_id: websiteId},
        {$set:
            {title: newWebsite.title}
        });

module.exports = {
    createWebsite,
    findAllWebsites,
    deleteWebsite,
    findWebsiteById
};
