const User = require('../../../models/coordenacoes');

const deleteCoordenacao = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Coordenação Deletada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteCoordenacao