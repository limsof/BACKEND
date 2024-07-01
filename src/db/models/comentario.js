const { Model, DataTypes, TIME } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/lib/utils');

const COMMENT_TABLE = 'comentario';

class Comment extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: COMMENT_TABLE, // Nombre de la tabla en la base de datos
            modelName: 'Comment', // Nombre del modelo en Sequelize
            timestamps: false // Agrega campos createdAt y updatedAt automáticamente
        }
    }
}

const CommentSchema = {
    id: {
        field: 'id_comentario',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER // Sequelize manejará esto como SERIAL en PostgreSQL
    },
    fecha: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'fecha',
        defaultValue: DataTypes.NOW
    },
    descripcion: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    id_personal: {
        allowNull: false,
        type: DataTypes.INTEGER, 
        references: {
            model: 'personal', 
            key: 'id'  
        },
        field: 'id_personal'
    },
    id_problema: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'problema', 
            key: 'id_problema'  
        },
        field: 'id_problema'
    }
}

module.exports = { Comment, CommentSchema };
