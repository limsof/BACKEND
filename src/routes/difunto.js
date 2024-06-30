const express = require('express');
const router = express.Router(); 
const DifuntoController = require('../controllers/difuntoController');

router
    .get('/', DifuntoController.get )
    .get('/:id', DifuntoController.getById )
    .post('/', DifuntoController.create )
    .put('/:id', DifuntoController.update )
    .delete('/:id', DifuntoController._delete );

module.exports = router;