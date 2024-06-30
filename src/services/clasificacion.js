const { models } = require('../libs/sequelize');

class ClasificacionService { 
  
    constructor() {}

    async find() {
      const res = await models.Clasificacion12.findAll();
      return res;
    }

   

   
  
  }
  
  module.exports = ClasificacionService;