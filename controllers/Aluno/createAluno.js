const User = require('../../models/aluno');

const createAluno= async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(200).json({msg:'Aluno Criado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createAluno