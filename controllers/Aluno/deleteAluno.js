const User = require('../../models/aluno');

const deleteAluno = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Aluno Deletado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteAluno