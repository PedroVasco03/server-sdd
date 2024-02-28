const User = require('../../../models/horariosecretaria');

const getHorarioById = async(req, res)=>{
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
module.exports = getHorarioById
