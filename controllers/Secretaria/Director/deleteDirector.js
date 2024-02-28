const User = require('../../../models/director');

const deleteDirector = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Director Deletado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteDirector