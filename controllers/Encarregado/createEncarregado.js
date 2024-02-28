const User = require('../../models/encarregado');

const createEncarregado= async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Encarregado Criado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createEncarregado