const express = require('express');
const router = express.Router(); 
const problemaController = require('../controllers/problema');

router
    .get('/', problemaController.get )
    .get('/:id', problemaController.getById )
    .post('/', problemaController.create )
    .put('/:id', problemaController.update )
    .delete('/:id', problemaController._delete );

module.exports = router;