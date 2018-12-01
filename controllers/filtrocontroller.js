const filtro = require ('../models/filtro');
const filtrocontroller = {};

filtrocontroller.index = async function(req,res,next){
    try {
        let filtros = await filtro.find ();
        return res.status (200).json(filtros);
    }catch (error){
return res.status (500).json({error:error});
    }  
}
filtrocontroller.store = async function (req,res,next){
    let f = new filtro ();
    f.codigo = req.body.codigo;
    f.tipo = req.body.tipo;
    f.precio = req.body.precio;
try{
    await f.save ();
    return res.status(200).json({message: "ingresado con exito"});
}catch(error){
return res.status(500).json({error:error});
}
}
module.exports = filtrocontroller;