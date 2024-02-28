const User = require('../../models/feedback');

const createStock = async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Admin Criado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createStock