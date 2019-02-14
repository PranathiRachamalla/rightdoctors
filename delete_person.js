const 
mongoose = require('mongoose'),
remove = require("../schemas/person");

const remove_person = ((req,res,next)=>{     
    remove.person.findOneAndDelete({ $or: [
        {"_id" :mongoose.Types.ObjectId(req.body.id)},
        { 'name': req.body.name },
        ]},(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.status(200).json({
                message  : "person information deleted!!"
            });
        }
    });       
});

module.exports = {
    remove_person
}