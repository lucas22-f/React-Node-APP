const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true }, // esqueleto
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: false }
}, {
    timestamps: true // esta propiedad nos agrega cuando fue creado y la hora exacta.
})

const User = mongoose.model("User", userSchema); // nuestro modelo se basa en nuestro "esquema ! "

module.exports = User;