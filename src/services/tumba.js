const { models } = require('../libs/sequelize');

class TumbaService { 
  
    constructor() {}

    async find() {
      const res = await models.Tumba12.findAll();
      return res;
    }

   

   
  
  }
  
  module.exports = TumbaService;