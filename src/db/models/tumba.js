const { Model, DataTypes, TIME } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/lib/utils');

const COMMENT_TABLE = 'tumba';

class Tumba12 extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: COMMENT_TABLE, // Nombre de la tabla en la base de datos
            modelName: 'Tumba12', // Nombre del modelo en Sequelize
            timestamps: false // Agrega campos createdAt y updatedAt automáticamente
        }
    }
}

const TumbaSchema = {
    id: {
        field: 'id_tumba',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER // Sequelize manejará esto como SERIAL en PostgreSQL
    },
    seccion: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'seccion',
        
    },
    numero: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'numero',
        
    },
   
    estado: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'estado',
        
    }
    
}

module.exports = { Tumba12, TumbaSchema };






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