const User = require('../../../models/director');

const getDirector = async(req, res)=>{
    try{
        const response = await User.findAll()
        res.status(200).json(response)
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports = getDirector





