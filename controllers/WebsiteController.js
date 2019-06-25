
modules.exports = function (app) {
    const WebsiteDao = require('../daos/WebsiteDao');

    createWebsite = (req, res) => {
        WebsiteDao.createWebsite(req.body);
    };

    app.post('/api/websites', createWebsite);
};