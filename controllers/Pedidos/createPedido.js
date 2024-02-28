const User = require('../../models/pedido');

const createPedido= async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Admin Criado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createPedido