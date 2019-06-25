const WebsiteModel = require('../models/WebsiteModel');

const createWebsite = (website) => WebsiteModel.create(website);

const findAllWebsites = () => WebsiteModel.find();

const findWebsiteById = (websiteId) =>
    WebsiteModel.find({_id: websiteId});

const deleteWebsite = (websiteId) =>
    WebsiteModel.remove({_id: websiteId});

const updateWebsite = (websiteId, newWebsite) =>
    WebsiteModel.update(
        {_id: websiteId},
        {$set:
            {title: newWebsite.title}
        });

module.exports = {
    createWebsite,
    findAllWebsites,
    findWebsiteById,
    deleteWebsite,
    updateWebsite
};
