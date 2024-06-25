const PersonsService = require('../services/persons.service');
const service = new PersonsService();



const create = async(req, res) => {
    try {
      const user = await service.create(req.body);
      res.json({ success: true, data: { id: user.id } });
    } catch (error) {
      console.error('Error creating user:', error); // Log the error
      res.status(500).send({ success: false, message: error.message });
    }
  };

const get = async(req,res)=>{
    try{
        const responce = await service.find();
        res.json(responce);

    }catch(error)
    {
        res.status(500).send({susses: false,message: error.message});
    }   
}


const getById = async(req,res)=>{
    try{
        const {id} = req.params;
        const responce = await service.findOne(id);
        res.json(responce);

    }catch(error)
    {
        res.status(500).send({susses: false,message: error.message});
    }   
}


  const update = async(req,res)=>{
    try{
        const { id } = req.params;
        const body =req.body;
        const responce = await service.update(id,body);
        res.json(responce);

        
    }catch(error)
    {
        res.status(500).send({susses: false,message: error.message});
    }   
}




const _delete = async(req,res)=>{
    try{
        const {id} = req.params;
        const responce = await service.delete(id);
        res.json(responce);

        
    }catch(error)
    {
        res.status(500).send({susses: false,message: error.message});
    }   
}

module.exports ={
    create,get,getById,update,_delete
};