const User = require('../../models/funcionario');

const createFuncionario = async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Funcionario Criado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createFuncionario