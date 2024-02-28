const User = require('../../models/funcionario');

const deleteFuncionario = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Funcionario Deletado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteFuncionario