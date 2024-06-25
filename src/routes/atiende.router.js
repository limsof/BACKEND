const express = require('express');
const router = express.Router();
const atiendeController = require('../controllers/atiende.controller');

router
   .get('/',atiendeController.get)
   .get('/:id',atiendeController.getById)
   .post('/',atiendeController.create)
   .put('/:id',atiendeController.update)
   .delete('/:id',atiendeController._delete);

module.exports = router;
