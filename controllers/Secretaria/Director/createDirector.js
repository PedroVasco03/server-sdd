const User = require('../../../models/director');

const createDirector= async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Director Criado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createDirector