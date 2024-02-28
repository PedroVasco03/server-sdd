const User = require('../../../models/reclamacao');

const createHorario = async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'reclamacao Criada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createHorario