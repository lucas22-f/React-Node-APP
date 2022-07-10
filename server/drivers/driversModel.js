const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const driverSchema = new Schema({
    name:{type:String},
    presentation:{type:String},
    car_img:{type:String},
    image:{type:String},
    car_name:{type:String},
})

const Driver = mongoose.model("Driver",driverSchema);

module.exports = Driver;