const express = require('express');
const router = express.Router(); 
const comentarioController = require('../controllers/comentario');

router
    .get('/', comentarioController.get )
    .get('/:id', comentarioController.getById )
    .post('/', comentarioController.create )
    .put('/:id', comentarioController.update )
    .delete('/:id', comentarioController._delete );

module.exports = router;