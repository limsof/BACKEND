
const express = require('express'); 


const authController = require('../controllers/authController');
const personsRouter = require('./persons.router');
const rolesRouter = require('./roles.router');
const atiendeRouter = require('./atiende.router');
//const authRouter = require('./auth.router');

const comentarioRouter = require('./comentario')
const problemaRouter = require('./problema')
const tipoRouter = require('./tipo')

const difunto = require('./difunto')
const clasificacion = require('./clasificacion')
const tumba = require('./tumba')


function routerApi(app)
{
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/persons',personsRouter);
    router.use('/roles',rolesRouter);
    router.use('/atiende',atiendeRouter);
    //router.use('/auth', authRouter);
    router.post('/login', authController.login);

    router.use('/comentario',comentarioRouter);
    router.use('/problema',problemaRouter);
    router.use('/tipo',tipoRouter);

    router.use('/difuntos',difunto);
    router.use('/clasificacion',clasificacion);
    router.use('/tumba',tumba);
}

module.exports = routerApi;