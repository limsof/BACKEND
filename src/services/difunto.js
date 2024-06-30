const { models } = require('../libs/sequelize');

class DifuntoService { 
  
    constructor() {}

    async find() {
      const res = await models.Difunto12.findAll({
        /* include: [
            {
              model: models.Tumba12,
              as: 'Tumba12'
            },
            {
              model: models.Clasificacion12,
              as: 'Clasificacion12'
            }
          ] */
      });
      return res;
    }

    async findOne(id) {
      const res = await models.Difunto12.findByPk(id,
        {
           /*  include: [
                {
                  model: models.Tumba12,
                  as: 'Tumba12'
                },
                {
                  model: models.Clasificacion12,
                  as: 'Clasificacion12'
                }
              ] */
        }
      );
      return res;
    }

    async create(data) {
      const res = await models.Difunto12.create(data);
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
  
  module.exports = DifuntoService;