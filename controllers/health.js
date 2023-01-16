const {name, version}  = require('../package.json');

const get = async(req,res,next)=> {
    try{
        console.log("in controllers")
        res.send({
            error : false ,
            message : "I am Alive",
            data :{ name: name,version:version}
        })

    }catch(err){
        next(err)
    }
}
module.exports = {get : get}