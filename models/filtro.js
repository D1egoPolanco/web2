const mongoose = require ('mongoose');
const {Schema} = mongoose;

const filtroSchema = new Schema ({
    codigo: {type:String,unique:true,required:true},
    tipo: {type:String, required:true},
    precio : { type:String, required:true}
});
module.exports = mongoose.model('filtros','filtroSchema');