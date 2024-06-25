const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/roles.controller');

router
   .get('/',rolesController.get)
   .get('/:id',rolesController.getById)
   .post('/',rolesController.create)
   .put('/:id',rolesController.update)
   .delete('/:id',rolesController._delete);

module.exports = router;
