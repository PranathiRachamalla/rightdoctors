const express = require("express"),
app = express(),
bodyParser = require("body-parser"),
// http = require('http'),
helmet = require('helmet'),
cors = require("cors"),
api = require('./routes/api.js')(express),
// firebase = require('firebase-admin'),
busboybodyparser = require("busboy-body-parser"),

mongodb = require("mongodb").MongoClient,
mongoose = require("mongoose"),
config = require("./config.js"),
morgan = require('morgan');

mongoose.Promise = global.Promise;

mongodb.connect(config.db , {useNewUrlParser : true}).then((db)=>{
    console.log("connected to url");
}).catch((err)=>{
    console.log(config.db);
    console.log(err);
});

mongoose.connect(config.db , {useNewUrlParser : true, useCreateIndex: true, useFindAndModify: false}).then((db)=>{
    console.log("connected to mongoose");
    dbname1 = db;
}).catch((err)=>{
    console.log(err);
});


// const bucketInfo = firebase.storage().bucket();
// console.log(bucketInfo);

app.use(cors());
app.use(busboybodyparser({ limit : '250mb'}));
app.use(busboybodyparser({ multi: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({limit: '50mb' , extended: true , parameterLimit: 1000000}));
app.use(helmet());
app.use('/api', api);

app.listen(config.port , (err)=>
{
    if(err) {
        console.log(err);
    }
    else {
        console.log("listening to server : ",config.port);
    }
});

module.exports = {
    app
}

