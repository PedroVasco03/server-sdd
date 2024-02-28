const User = require('../../../models/coordenador');

const createHorario = async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Coordenador Criado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createHorario