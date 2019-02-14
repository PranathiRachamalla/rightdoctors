const 
display = require("../schemas/person");

const show_pupil = ((req,res,next)=>{
    
    display.person.find((err , found)=>{
        if(err){
            console.log(err);
        }
        else if(!found){
            res.status(404).json({
                message  :"no results found!!"
            });
        }
        else{
            res.status(200).json({
                people : found
            });
        }
    });
});

module.exports = {
    show_pupil
}