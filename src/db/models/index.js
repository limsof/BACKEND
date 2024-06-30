const { Person, PersonSchema } = require('./persona.model')
const { Role, RoleSchema, ROLE_TABLE } = require('./rol.model');
const { Atiend, AtiendeSchema, ATEND_TABLE } = require('./atiende.model');

const { Problem, ProblemSchema } = require('./problema.js')
const { Type, TypeSchema } = require('./tipo.js')
const { Comment, CommentSchema } = require('./comentario.js')

const { Difunto12, DifuntoSchema } = require('./difuntos.js')
const { Tumba12, TumbaSchema } = require('./tumba.js')
const { Clasificacion12, ClasificacionSchema } = require('./clasificacion.js')


function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Role.init(RoleSchema, Role.config(sequelize));
    Atiend.init(AtiendeSchema, Atiend.config(sequelize));

    // Configurar asociaciones
    Person.associate(sequelize.models);
    Role.associate(sequelize.models);
    Atiend.associate(sequelize.models);

    Type.init(TypeSchema, Type.config(sequelize))
    Problem.init(ProblemSchema, Problem.config(sequelize))
    Comment.init(CommentSchema, Comment.config(sequelize))

    Difunto12.init(DifuntoSchema, Difunto12.config(sequelize))
    Clasificacion12.init(ClasificacionSchema, Clasificacion12.config(sequelize))
    Tumba12.init(TumbaSchema, Tumba12.config(sequelize))

    
    Type.hasMany(Problem, {
        foreignKey: 'id_tipo'
    })

    Person.hasMany(Comment, {
        foreignKey: 'id_personal' // de id_personal
    })

    Problem.hasMany(Comment, {
        foreignKey: 'id_problema'
    })

    Problem.belongsTo(Type, {
        foreignKey: 'id_tipo'
    })

    Comment.belongsTo(Person, {
        foreignKey: 'id_personal' // de id_personal
    })

    Comment.belongsTo(Problem, {
        foreignKey: 'id_problema'
    })

    

    Tumba12.hasMany(Difunto12, {
        foreignKey: 'id_tumba'
       
    })
    
    Clasificacion12.hasMany(Difunto12, {
        foreignKey: 'id_clasificacion'
        
    })
    
    Difunto12.belongsTo(Tumba12, {
        foreignKey: 'id_tumba'
       
    })
    
    Difunto12.belongsTo(Clasificacion12, {
        foreignKey: 'id_clasificacion'
        
    })
    


}

module.exports = setupModels;
