const User = require('../../models/feedback');

const deleteStock = async(req, res)=>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Admin Deletado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = deleteStock