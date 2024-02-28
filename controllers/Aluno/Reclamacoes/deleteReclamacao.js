const User = require('../../../models/reclamacao');

const deleteHorario = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Reclamacao Deletado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteHorario