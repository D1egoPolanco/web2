const dulce = require('../models/dulce');
const dulcecontroller = {};

dulcecontrollercontroller.index = async function(req,res,next){
    try {
        let dulces = await dulce.find ();
        return res.status (200).json(dulces);
    }catch (error){
return res.status (500).json({error:error});
    }  
}
dulcecontroller.store = async function (req,res,next){
    let f = new dulce ();
    f.iddulce = req.body.iddulce;
    f.nombre = req.body.nombre;
    f.color = req.body.color
try{
    await f.save ();
    return res.status(200).json({message: "ingresado con exito"});
}catch(error){
return res.status(500).json({error:error});
}
}
module.exports = dulcecontroller;