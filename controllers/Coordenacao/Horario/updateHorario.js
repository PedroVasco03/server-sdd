const User = require('../../../models/horarioCoordenacao');

const updateHorario = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'User Updated'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateHorario