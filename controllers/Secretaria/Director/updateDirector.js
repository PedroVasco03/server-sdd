const User = require('../../../models/director');

const updateDirector= async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Director Actualizado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateDirector