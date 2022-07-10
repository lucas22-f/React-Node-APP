const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.db_uri

const options = { // utilizamos un objeto de configuracion para ser mas explicitos
    maxPoolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri,options,(err)=>{

    err ? console.log("error",err) : console.log("mongo db atlas connected");

})
