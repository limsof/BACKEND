const { Person } = require('../db/models/persona.model'); // Ajusta la ruta según tu estructura de archivos
const jwt = require('jsonwebtoken');

async function login(req, res) {
  const { correo, password } = req.body;

  try {
    console.log('Correo recibido:', correo);

    // Buscar la persona por correo electrónico
    const person = await Person.findOne({
      where: { Correo: correo }
    });

    console.log('Persona encontrada:', person);

    // Si no se encontró la persona, devuelve un error
    if (!person) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña sin cifrado
    const isPasswordValid = (password === person.Password);

    console.log('Contraseña válida:', isPasswordValid);

    // Si la contraseña no es válida, devuelve un error
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar token JWT
    const token = jwt.sign({ id: person.id, correo: person.Correo }, 'tu_secreto', { expiresIn: '1h' });

    // Enviar el token y el ID del usuario como respuesta
    res.json({ token, userId: person.id });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}

module.exports = {
  login
};
