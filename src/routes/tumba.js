const express = require('express');
const router = express.Router(); 
const TumbaController = require('../controllers/tumbaController');

router
    .get('/', TumbaController.get )
    

module.exports = router;