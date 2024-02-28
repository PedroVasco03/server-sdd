const User = require('../../../models/integrantescoordenacao');

const updateIntegrante = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Elemento Actualizado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateIntegrante