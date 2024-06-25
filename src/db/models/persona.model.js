const { Model, DataTypes } = require('sequelize');

const PERSON_TABLE = 'personal';

class Person extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true
        }
    }

    static associate(models) {
        this.hasMany(models.Role, { as: 'roles', foreignKey: 'personId' });
    }

    static associate(models) {
        this.hasMany(models.Atiend, { as: 'atiende', foreignKey: 'personId' });
    }
}

const PersonSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    Nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'Nombre'
    },
    Apellidos: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'Apellidos'
    },
    Correo: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'Correo'
    },
    Password: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'Password'
    },
    Telefono: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'Telefono'
    },
    Direccion: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'Direccion'
    }
}

module.exports = { Person, PersonSchema, PERSON_TABLE };
