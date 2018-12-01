const mongoose = require ('mongoose');
const {Schema} = mongoose;

const filtroSchema = new Schema ({
    iddulce: {type:String,unique:true,required:true},
    nombre: {type:String, required:true},
    color: {type:String, required:true},
    calificacion:{type:String, required:true}
});
module.exports = mongoose.model('filtro','filtroSchema');