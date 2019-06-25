const websiteService = require('../services/WebsiteService');

module.exports = app => {
    createWebsite = (req, res) => {
        websiteService.createWebsite(req.body)
            .then(websites => {
                res.send(websites);
            })
    }
    /*profile = (req, res) => {
        websiteService.findWebsiteById(req.params['websiteId'])
            .then(website => {
                res.send(website);
            });
    }

    login = (req, res) => {
        websiteService.findWebsiteByCredentials(req.body['websitename'], req.body['password'])
            .then(website => {
                console.log(req);
                console.log(website);
                res.send(website);
            });
    }

    findWebsiteByWebsitename = (req, res) => {
        websiteService.findWebsiteByWebsitename(req.body['websitename'])
            .then(website => {
                res.send(website);
            });
    }*/

    findAllWebsites = (req, res) => {
        websiteService.findAllWebsites()
            .then(websites => {
                res.send(websites);
            });
    }

    findWebsiteById = (req, res) => {
        websiteService.findWebsiteById(req.params["websiteId"])
            .then(websites => {
                res.send(websites);
            });
    }

    deleteWebsite = (req, res) => {
        websiteService.deleteWebsite(req.params['websiteId'])
            .then(status => {
                res.send(status);
            });
    }

    updateWebsite = (req, res) => {
        websiteService.updateWebsite(req.params['websiteId'], req.body)
            .then(status => {
                res.send(status);
            });
    }
    
    //add logout service
    app.post('/api/websites', createWebsite);
    app.get('/api/websites', findAllWebsites);
    app.get('/api/websites/:websiteId', findWebsiteById);
    app.put('/api/websites/:websiteId', updateWebsite);;
    app.delete('/api/websites/:websiteId', deleteWebsite);
}