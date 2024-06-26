const { Model, DataTypes } = require('sequelize');

const PROBLEM_TABLE = 'problema';

class Problem extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PROBLEM_TABLE, // Nombre de la tabla en la base de datos
            modelName: 'Problem', // Nombre del modelo en Sequelize
            timestamps: false // No se agregarán campos createdAt y updatedAt automáticamente
        };
    }
}

const ProblemSchema = {
    id: {
        field: 'id_problema',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER 
    },
    severidad: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            isIn: {
                args: [['bajo', 'medio', 'alto']],
                msg: "La severidad debe ser:  'bajo', 'medio' o 'alto'"
            } 
        },
        field: 'severidad'
    },
    estado: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            isIn: {
                args: [['pendiente', 'en proceso', 'resuelto']],
                msg: "El estado debe ser: 'pendiente', 'en proceso' o 'resuelto'"
              }
        },
        field: 'estado',
        defaultValue: 'pendiente'
    },
    id_tipo: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'tipo', 
            key: 'id_tipo' 
        },
        field: 'id_tipo'
    }
}


module.exports = { Problem, ProblemSchema };
