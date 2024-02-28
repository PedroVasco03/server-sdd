const User = require('../../../models/integrantesecretaria');

const createIntegrante= async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Elemento adicionado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createIntegrante