const { models } = require('../libs/sequelize.js');

class TipoService { 
  
    constructor() {}

    async find() {
      const res = await models.Type.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Type.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Type.create(data);
      return res;
    }

    async update(id, data) {
      const model = await models.Type.findByPk(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await  models.Type.findByPk(id);
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = TipoService;