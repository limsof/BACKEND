const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ajusta la ruta según tu estructura de archivos

// Ruta para el inicio de sesión
router.post('/login', authController.login);

module.exports = router;
