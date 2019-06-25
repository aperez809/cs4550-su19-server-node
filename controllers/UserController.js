const userService = require('../dao/UserDao');

module.exports = app => {
    register = (req, res) => {
        userService.createUser(req.body)
            .then(users => {
                res.send(users);
            })
    }

    profile = (req, res) => {
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
    }

    findAllUsers = (req, res) => {
        userService.findAllUsers()
            .then(users => {
                res.send(users);
            });
    }

    deleteUser = (req, res) => {
        userService.deleteUser(req.params['userId'])
            .then(status => res.send(status));
    }

    updateProfile = (req, res) => {
        console.log(req.body);
        userService.updateUser(req.params['userId'], req.body)
            .then(status => {
                console.log(status);
                res.send(status);
            });
    }

    //add logout service
    app.get('/api/users', findAllUsers);
    app.get('/api/profile', findUserById);
    app.post('/api/login', findUserByCredentials);
    app.post('/api/users/register', findUserByUsername);
    app.post('/api/register', register);
    app.delete('/api/users/:userId', deleteUser);
    app.put('/api/profile', updateUser);
}