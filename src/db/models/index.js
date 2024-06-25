const {Person,PersonSchema} = require('./persona.model')
const { Role, RoleSchema, ROLE_TABLE } = require('./rol.model');
const { Atiend, AtiendeSchema, ATEND_TABLE } = require('./atiende.model');


function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Role.init(RoleSchema, Role.config(sequelize));
    Atiend.init(AtiendeSchema, Atiend.config(sequelize));

    // Configurar asociaciones
    Person.associate(sequelize.models);
    Role.associate(sequelize.models);
    Atiend.associate(sequelize.models);
}

module.exports = setupModels;
