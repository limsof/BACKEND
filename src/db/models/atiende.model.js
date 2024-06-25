const { Model, DataTypes } = require('sequelize');

const ATEND_TABLE = 'atiende';

class Atiend extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ATEND_TABLE,
            modelName: 'Atiend',
            timestamps: true
        }
    }

    static associate(models) {
        this.belongsTo(models.Person, { as: 'person', foreignKey: 'personId' });
    }
}

const AtiendeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    Fecha: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'Fecha'
    },
    Descripcion: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'Descripcion'
    },
    personId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'personal', // Nombre de la tabla referenciada
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        field: 'personId'
    }
}

module.exports = { Atiend, AtiendeSchema, ATEND_TABLE };
