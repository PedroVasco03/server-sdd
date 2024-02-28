const User = require('../../models/reclamacao');

const deleteReclamacao = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Reclamação Deletada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteReclamacao