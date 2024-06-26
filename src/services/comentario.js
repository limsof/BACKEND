const { models } = require('../libs/sequelize');

class ComentarioService { 
  
    constructor() {}

    async find() {
      const res = await models.Comment.findAll({
        include: {
          model: models.Problem,
          as: 'Problem',
          include:{
            model: models.Type,
            as: 'Type' 
          }
        }
      });
      return res;
    }

    async findOne(id) {
      const res = await models.Comment.findByPk(id,
        {
          include: {
            model: models.Problem,
            as: 'Problem',
            include:{
              model: models.Type,
              as: 'Type' 
            }
          }
        }
      );
      return res;
    }

    async create(data) {
      const res = await models.Comment.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = ComentarioService;