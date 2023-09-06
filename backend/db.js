const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://Sanchit893:Sanchit1@cluster0.m8kbtiq.mongodb.net/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("Connected to MongoDB");
    })
}

module.exports = connectToMongo;