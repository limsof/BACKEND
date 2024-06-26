const express = require('express');
const router = express.Router(); 
const tipoController = require('../controllers/tipo');

router
    .get('/', tipoController.get )
    .get('/:id', tipoController.getById )
    .post('/', tipoController.create )
    .put('/:id', tipoController.update )
    .delete('/:id', tipoController._delete );

module.exports = router;