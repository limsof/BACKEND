const { models } = require('../libs/sequelize');

class ProblemaService {

  constructor() { }

  async find() {
    const res = await models.Problem.findAll(
      {
        include: {
          model: models.Type,
          as: 'Type',
        }
      }
    );
    return res;
  }

  async findOne(id) {
    const res = await models.Problem.findByPk(id,
      {
        include: {
          model: models.Type,
          as: 'Type'
        }
      }
    );
    return res;
  }

  async create(data) {
    const res = await models.Problem.create(data);
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

module.exports = ProblemaService;