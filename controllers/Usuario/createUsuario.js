const User = require('../../models/usuario');

const createSecretaria= async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Secretaria Criada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createSecretaria