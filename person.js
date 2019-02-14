const 
mongoose = require("mongoose");

const pupil = new mongoose.Schema({

    name : {
        type : String,
        unique : true,
        required : true
    },

    age : {
        type : Number,
        required : true
    },

    gender : {
        type : String,
        required : true 
    },

    mobile_number : {
        type : Number,
        required : true
    }
});

const person = mongoose.model("People" , pupil);
//console.log("created collection");

module.exports = {
    person
}