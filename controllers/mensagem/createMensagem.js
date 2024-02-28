const User = require('../../models/mensagem');

const createMensagem= async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Mensagem Criada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createMensagem