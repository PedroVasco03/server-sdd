const User = require('../../../models/horariosecretaria');

const deleteHorario = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Horario Deletado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteHorario