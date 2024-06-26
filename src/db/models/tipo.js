const { Model, DataTypes } = require('sequelize');

const TYPE_TABLE = 'tipo';

class Type extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TYPE_TABLE, // Nombre de la tabla en la base de datos
            modelName: 'Type', // Nombre del modelo en Sequelize
            timestamps: false // No se agregarán campos createdAt y updatedAt automáticamente
        };
    }
}

const TypeSchema = {
    id: {
        field: 'id_tipo',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER // Sequelize manejará esto como SERIAL en PostgreSQL
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre'
    }
}

module.exports = { Type, TypeSchema };
