const TumbaService = require('../services/tumba.js')
const service = new TumbaService()



const get = async ( req, res ) => {
    try {
        const response = await service.find()
        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }
}



module.exports = {
    get
}