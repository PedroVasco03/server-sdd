const User = require('../../models/aluno');

const updateAluno = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Aluno Actualizado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateAluno