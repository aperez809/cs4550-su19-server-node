const websiteDao = require('../daos/WebsiteDao');


createWebsite = (website) => {
    return websiteDao.createWebsite(website);
}

/*profile = (req, res) => {
    userService.findUserById(req.params['userId'])
        .then(user => {
            res.send(user);
        });
}

login = (req, res) => {
    userService.findUserByCredentials(req.body['username'], req.body['password'])
        .then(user => {
            console.log(req);
            console.log(user);
            res.send(user);
        });
}

findUserByUsername = (req, res) => {
    userService.findUserByUsername(req.body['username'])
        .then(user => {
            res.send(user);
        });
}*/

findAllWebsites = () => {
    return websiteDao.findAllWebsites();
}

findWebsiteById = (websiteId) => {
    return websiteDao.findWebsiteById(websiteId);
}

deleteWebsite = (websiteId) => {
    return websiteDao.deleteWebsite(websiteId);
}

updateProfile = (req, res) => {
    console.log(req.body);
    userService.updateUser(req.params['userId'], req.body)
        .then(status => {
            console.log(status);
            res.send(status);
        });
}
module.exports = {
    createWebsite,
    findAllWebsites,
    deleteWebsite,
    findWebsiteById,
    updateWebsite
}