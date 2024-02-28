const User = require('../../../models/coordenador');

const updateUser = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Coordenador Actualizado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateUser