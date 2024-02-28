const User = require('../../models/mensagem');

const deleteSecretaria = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Secretaria Deletada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteSecretaria