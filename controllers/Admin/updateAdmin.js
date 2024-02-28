const User = require('../../models/admin');

const updateAdmin = async(req, res)=>{
    try{
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Admin Actualizado'})
    }catch(error){
        console.log(error.message)
    }
}
module.exports = updateAdmin