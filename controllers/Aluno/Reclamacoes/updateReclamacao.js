const User = require('../../../models/reclamacao');

const updateUser = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Reclamacao Actualizada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateUser