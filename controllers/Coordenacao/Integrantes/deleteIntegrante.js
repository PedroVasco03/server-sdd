const User = require('../../../models/integrantescoordenacao');

const deleteIntegrante = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Elemento Deletado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteIntegrante