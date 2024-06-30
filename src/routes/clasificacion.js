const express = require('express');
const router = express.Router(); 
const ClasificacionController = require('../controllers/clasificacionController');

router
    .get('/', ClasificacionController.get )
    

module.exports = router;