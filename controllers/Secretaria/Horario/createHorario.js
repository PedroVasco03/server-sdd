const User = require('../../../models/horariosecretaria');

const createHorario = async(req, res)=>{
    try{
        await User.create(req.body)
        res.status(201).json({msg:'Horário Criado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = createHorario