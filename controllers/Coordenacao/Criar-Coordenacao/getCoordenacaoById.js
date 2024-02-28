const User = require('../../../models/coordenacoes');

const getCoordenacaoById = async(req, res)=>{
    try{
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response)
    }catch(error){
        console.log(error.message)
    }
}
module.exports = getCoordenacaoById