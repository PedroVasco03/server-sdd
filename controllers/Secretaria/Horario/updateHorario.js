const User = require('../../../models/horariosecretaria');
const updateHorario= async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Horario Actualizado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateHorario