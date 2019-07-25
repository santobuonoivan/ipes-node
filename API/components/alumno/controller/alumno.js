const { alumno } = require('../../db/db.mariadb.config');
//const alumnService = require('../services/alumnService');
const _ = require('lodash');


/* GET ALL */
exports.all_alumns = async function (req, res, next) {
    try{
        const alumnsList = await alumno.findAll();
        if(alumnsList.length > 0)
            return res.send({
                ok:true,
                alumnsList
            });
        return res.send('alumns not found');
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};

/* ADD ONE */
exports.insert_alumn = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    let alumn = await alumno.findAll({where:{dni:req.body.dni}});
    if(alumn.length > 0) return res.status(400).send({
        ok:false,
        menssage:'Ya hay un alumno con el dni asignado'
    });
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await alumno.sequelize.query("select max(id) from alumnos");
            maxId = maxId[0][0].max;
            maxId +=1 ;
            req.body.id = maxId;
            result = await alumno.create(req.body);
        }catch (e) {
            cont += 1;
        }
    }
    if(cont > 3){
        return res.status(400).send({
            ok:false,
            menssage:"el servidor no puede responder, vuelva a intentarlo"
        });
    }
    if(result){
        console.log(result);
        return res.send({
            ok:true,
            result
        })
    }
};

/* UPDATE ONE */
exports.update_alumn = async function (req, res, next) {
    //const { error } = alumnService.validateAlumn(req.body);
    //if(error) return res.status(400).send(error.details[0].message);
    try {
        let result = await alumno.update(req.body,{where: {id:req.params.id}});
        return res.send({
            ok: true,
            menssage: `${ result } records updated`
        });
    }catch (e) {
        return res.status(400).send({
            ok: false,
            menssage: `can't update record: ${e.errors[0].message}`
        });
    }
};

/* DELETE ONE (desactivar)*/
exports.delete_alumn = async function(req, res, next){
    try {
        let result = await alumno.update({activo:false},{where:{id:req.params.id}});
        //console.log(result);
        return res.send({
            ok:true,
            menssage: `${result} alumns deleted`
    });
    }catch (e) {
        return res.status(400).send({
            ok:false,
            menssage:`no se puede desactivar/borrar el alumno: ${e.errors[0].message}`
        });
    }
};

/* GET ONE */
exports.show_alumn = async function (req, res, next) {
    try {
        let result = await alumno.findOne({
            where: {
                id: req.params.id
                /*
                $or: [
                    {
                        id: {
                            $like: req.param.id
                        }
                    },
                    {
                        dni: {
                            $like: req.param.dni
                        }
                    },
                    {
                        nombre: {
                            $like: '%'+ req.param.nombre+'%'
                        }
                    },
                    {
                        apellido: {
                            $like: '%'+ req.param.apellido +'%'
                        }
                    }
                ]

                 */
            }
        });
        if(!result) return res.send({
            ok: false,
            menssage:'Usuario no encontrado'
        });
        //console.log(result);
        return res.send({
            ok: true,
            result
        });
    }catch (e) {
        return res.status(400).send({
            ok: false,
            message: e.errors[0].message
        });
    }
};

/*
exports.alumn_locations = async function (req, res, next) {
    try {
        const alumn = await alumno.findOne({
            where:{id_alumn:req.params.id},
            include:['locations']
        });
        if(!alumn) return res.status(404).send("alumn nor found");
        return res.send(alumn);
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};

exports.alumn_add_locations = async function (req, res, next) {

    const alumn = await alumno.findOne(
        {
            where:{id_alumn:req.params.id}
        }
    )
    let locationList = await locations.findAll({where:{location_name:req.body.location_name}});
    if(locationList.length > 0) return res.status(400).send('There is at least a locations with the same name, please assign a different location name');
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await locations.sequelize.query("select max(id_location) from locations");
            maxId = maxId[0][0].max;
            maxId +=1;
            req.body.id_location = maxId;
            req.body.id_alumn = alumn.id_alumn;
            result = await locations.create(req.body);
        }catch (e) {
            cont += 1;
        }
    }
    if(cont > 3){
        return res.status(400).send("server does not respond please try again");
    }
    if(result){
        return res.send(result)
    }
};

exports.alumn_remove_locations = async function (req, res, next) {
    try{
        let alumn = await alumno.findOne({
            where:{id_alumn:req.params.id},
            include:['locations']
        });
        if(!alumn) return res.status(404).send("alumn not found");
        if(req.body.locations.length){
            for(let i=0; i<req.body.locations.length; i++)
            {
                let dl = await locations.destroy({
                    where:{
                        id_alumn: alumn.id_alumn,
                        id_location: req.body.locations[i]
                    }
                });
                console.log(dl);
            }
        }
        alumn = await alumno.findOne({
            where:{id_alumn:req.params.id},
            include:['locations']
        });
        return res.json({message:"locations removed",alumn:alumn});
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};*/
