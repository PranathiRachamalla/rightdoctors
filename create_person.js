const 
create = require("../schemas/person");

const create_pupil = ((req,res,next)=>{
    //console.log("entered create");
    let pupil = new create.person();
    pupil.name = req.body.name;
    pupil.age = req.body.age;
    pupil.gender = req.body.gender;
    pupil.mobile_number = req.body.mobile_number;
    console.log(pupil);

    if(!(pupil.name)){
        res.status(200).json({
            message : "enter name!!"
        });
    }
    else if(!(pupil.age)){
        res.status(200).json({
            message : "enter age!!"
        });  
    }
    else if(!(pupil.gender)){
        res.status(200).json({
            message : "enter gender!!"
        }); 
    }
    else if(!(pupil.mobile_number)){
        res.status(200).json({
            message : "enter mobile number!!"
        });
    }
    else{
        pupil.save().then(()=>{
            res.json({
                message  : "person created successfully!!"
            });
        }).catch((err)=>{
            consolelog(err);
        });
    }
})

module.exports = {
    create_pupil
}