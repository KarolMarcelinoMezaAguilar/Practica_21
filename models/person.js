const mongoose = require('mongoose');
let PersonSchema = new mongoose.PersonSchema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});
module.exports = mongoose.model('Persons', PersonSchema);