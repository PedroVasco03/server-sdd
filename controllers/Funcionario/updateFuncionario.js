const User = require('../../models/funcionario');

const updateFuncionario = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Funcionario Actualizado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateFuncionario