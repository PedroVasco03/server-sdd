const User = require('../../models/reclamacao');

const createReclamacao = async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Reclamação Criada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createReclamacao