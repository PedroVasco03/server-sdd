const User = require('../../../models/coordenacoes');

const createCoordenacao= async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Coordenação Criada'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createCoordenacao