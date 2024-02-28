const User = require('../../../models/coordenacoes');

const updateCoordenacao = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Coordenação actualizada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateCoordenacao