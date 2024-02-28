const User = require('../../../models/reclamacao');

const getCoordenadorById = async(req, res)=>{
    try{
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response)
    }catch(error){
        console.log(error.message)
    }
}
module.exports = getCoordenadorById
