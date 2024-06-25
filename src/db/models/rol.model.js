const { Model, DataTypes } = require('sequelize');

const ROLE_TABLE = 'roles';

class Role extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROLE_TABLE,
            modelName: 'Role',
            timestamps: true
        }
    }

    static associate(models) {
        this.belongsTo(models.Person, { as: 'person', foreignKey: 'personId' });
    }
}

const RoleSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    NombreRol: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'NombreRol'
    },
    Permisos: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'Permisos'
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

module.exports = { Role, RoleSchema, ROLE_TABLE };
