const { Model, DataTypes, TIME } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/lib/utils');

const COMMENT_TABLE = 'difunto';

class Difunto12 extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: COMMENT_TABLE, // Nombre de la tabla en la base de datos
            modelName: 'Difunto12', // Nombre del modelo en Sequelize
            timestamps: false // Agrega campos createdAt y updatedAt automáticamente
        }
    }
}

const DifuntoSchema = {
    id_difunto: {
        field: 'id_difunto',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER // Sequelize manejará esto como SERIAL en PostgreSQL
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre',
        
    },
    fecha_nacimiento: {
        allowNull: false,
        type: DataTypes.DATEONLY,  // Cambiado a DATEONLY
        field: 'fecha_nacimiento'
    },
    fecha_fallecimiento: {
        allowNull: false,
        type: DataTypes.DATEONLY,  // Cambiado a DATEONLY
        field: 'fecha_fallecimiento'
    },
    fecha_cremacion: {
        allowNull: false,
        type: DataTypes.DATEONLY,  // Cambiado a DATEONLY
        field: 'fecha_cremacion'
    },
    edad: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'edad',
        
    },
    genero: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'genero',
        
    },

    caso_muerte: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'caso_muerte',
        
    },

    lugar_defuncion: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'lugar_defuncion',
        
    },
    estado_civil: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'estado_civil',
        
    },





    id_tumba: {
        allowNull: false,
        type: DataTypes.INTEGER, 
        references: {
            model: 'tumba', 
            key: 'id_tumba'  
        },
        field: 'id_tumba'
    },
    id_clasificacion: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'clasificacion', 
            key: 'id_clasificacion'  
        },
        field: 'id_clasificacion'
    }
}

module.exports = { Difunto12, DifuntoSchema };






/* create table clasificacion (

    id_clasificacion SERIAL primary key,
    tipo varchar (50),
    costo float
);

create table tumba (

    id_tumba SERIAL primary key,
    seccion varchar (100),
    numero  int,
    estado varchar(200)
);


CREATE TABLE difunto (
    id_difunto SERIAL primary key,
    nombre varchar (100),
    fecha_nacimiento date,
    fecha_fallecimiento date,
    fecha_cremacion date,
    edad int,
    genero char,
    caso_muerte varchar (200),
    lugar_defuncion varchar (200),
    estado_civil varchar (200),
    id_tumba int,
    id_clasificacion int,
    foreign key (id_tumba) references tumba(id_tumba),
    foreign key (id_clasificacion) references clasificacion(id_clasificacion)


); */