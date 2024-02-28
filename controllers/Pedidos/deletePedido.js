const User = require('../../models/pedido');

const deletePedido = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Admin Deletado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deletePedido