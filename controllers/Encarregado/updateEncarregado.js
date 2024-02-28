const User = require('../../models/encarregado');

const updateEncarregado = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Encarregado Actualizado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateEncarregado