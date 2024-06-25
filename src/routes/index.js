
const express = require('express'); 


const authController = require('../controllers/authController');
const personsRouter = require('./persons.router');
const rolesRouter = require('./roles.router');
const atiendeRouter = require('./atiende.router');
//const authRouter = require('./auth.router');

function routerApi(app)
{
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/persons',personsRouter);
    router.use('/roles',rolesRouter);
    router.use('/atiende',atiendeRouter);
    //router.use('/auth', authRouter);
    router.post('/login', authController.login);
}

module.exports = routerApi;