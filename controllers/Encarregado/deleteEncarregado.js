const User = require('../../models/encarregado');

const deleteEncarregado = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Encarregado Deletado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteEncarregado