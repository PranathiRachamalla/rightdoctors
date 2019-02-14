const 
 mongoose = require('mongoose'),
update = require("../schemas/person");

const update_person = ((req,res,next)=>{
 
    if(!req.body.edited_age||!req.body.edited_gender||!req.body.edited_name||!req.body.edited_mobile_number){
        res.status(200).json({
            message  : "no information edited/updated!!"
        });
    }
    else{
        if(req.body.edited_name){
            update.person.findOneAndUpdate({ $or: [
                {"_id" :mongoose.Types.ObjectId(req.body.id)},
                { 'name': req.body.name },
              ]}, {$set : {"name" : req.body.edited_name}} ,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("name edited");
                }
            });
        }
        if(req.body.edited_age){
            update.person.findOneAndUpdate({ $or: [
                {"_id" :mongoose.Types.ObjectId(req.body.id)},
                { 'name': req.body.name },
              ]}, {$set : {"age" : req.body.edited_age}} ,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("age edited");
                }
            });
        }
        if(req.body.edited_gender){
            update.person.findOneAndUpdate({ $or: [
                {"_id" :mongoose.Types.ObjectId(req.body.id)},
                { 'name': req.body.name },
              ]}, {$set : {"gender" : req.body.edited_gender}} ,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("gender edited");
                }
            });
        }
        if(req.body.edited_mobile_number){
            update.person.findOneAndUpdate({ $or: [
                {"_id" :mongoose.Types.ObjectId(req.body.id)},
                { 'name': req.body.name },
              ]}, {$set : {"mobile_number" : req.body.edited_mobile_number}} ,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("name edited");
                }
            });
        }
        res.status(200).json({
            message  : "information edited/updated!!"
        });
    }     
});

module.exports = {
    update_person
}