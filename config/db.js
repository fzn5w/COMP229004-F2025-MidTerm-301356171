require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://fzn5w_db_user:<db_password>@comp229.nhtnzxu.mongodb.net/?retryWrites=true&w=majority&appName=comp229"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}